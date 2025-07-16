import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";
import Svg, { Path } from "react-native-svg";
import { colors, typography, borderRadius, spacing, breakpoints } from "../styles/theme";

interface Pal {
  id: string;
  name: string;
  level?: string;
  image?: string;
  status?: "organizer" | "pending" | "cancelled";
  price?: string;
  canRemove?: boolean;
  subtitle?: string;
}

interface GridProps {
  pals: Pal[];
  isCreateMode?: boolean;
  onRemovePal?: (id: string) => void;
  onAddPals?: () => void;
}

const Grid: React.FC<GridProps> = ({
  pals,
  isCreateMode = false,
  onRemovePal,
  onAddPals,
}) => {
  const { width: screenWidth } = Dimensions.get('window');
  const padding = 16; // Container padding
  const gap = 16; // Gap between items (equivalent to gap-4)
  
  // Responsive grid columns - exact matching PalCard breakpoints
  const getNumColumns = () => {
    if (screenWidth >= breakpoints.xl) return 5; // xl:grid-cols-5
    if (screenWidth >= breakpoints.lg) return 4; // lg:grid-cols-4
    if (screenWidth >= breakpoints.md) return 4; // md:grid-cols-4
    if (screenWidth >= breakpoints.sm) return 3; // sm:grid-cols-3
    return 3; // grid-cols-3
  };

  const numColumns = getNumColumns();
  const availableWidth = screenWidth - (padding * 2);
  const itemWidth = (availableWidth - (gap * (numColumns - 1))) / numColumns;

  const getStatusColor = (status?: string) => {
    switch (status) {
      case "organizer":
        return colors.playpal.green;
      case "pending":
        return colors.playpal.orange;
      case "cancelled":
        return colors.playpal["inactive-gray"];
      default:
        return colors.playpal.gray;
    }
  };

  // Render grid items in rows
  const renderGridItems = () => {
    const items = [...pals];
    
    // Add "Add Pals" button if in create mode
    if (isCreateMode && onAddPals) {
      items.push({
        id: 'add-pals',
        name: 'Add Pals',
        image: undefined,
      });
    }

    const rows = [];
    for (let i = 0; i < items.length; i += numColumns) {
      const rowItems = items.slice(i, i + numColumns);
      rows.push(
        <View key={i} style={styles.gridRow}>
          {rowItems.map((item, index) => {
            const isAddButton = item.id === 'add-pals';
            
            return (
              <View
                key={item.id}
                style={[
                  styles.gridItem,
                  {
                    width: itemWidth,
                    aspectRatio: 3/4, // Match client's aspect-[3/4]
                  }
                ]}
              >
                {isAddButton ? (
                  <TouchableOpacity
                    onPress={onAddPals}
                    style={styles.addPalsCard}
                  >
                    {/* Background */}
                    <View style={styles.cardBackground} />
                    
                    {/* Icon area */}
                    <View style={styles.cardImageArea}>
                      <Svg width="43" height="43" viewBox="0 0 43 43" fill="none">
                        <Path
                          d="M19.4817 23.6011H10.662C10.1622 23.6011 9.74359 23.4317 9.40609 23.093C9.06859 22.7544 8.89925 22.3357 8.89808 21.8371C8.8969 21.3385 9.06624 20.9199 9.40609 20.5812C9.74594 20.2425 10.1646 20.0732 10.662 20.0732H19.4817V11.2535C19.4817 10.7538 19.651 10.3351 19.9897 9.99761C20.3284 9.66011 20.747 9.49078 21.2456 9.4896C21.7442 9.48842 22.1634 9.65776 22.5033 9.99761C22.8431 10.3375 23.0119 10.7561 23.0095 11.2535V20.0732H31.8292C32.329 20.0732 32.7482 20.2425 33.0869 20.5812C33.4255 20.9199 33.5943 21.3385 33.5931 21.8371C33.5919 22.3357 33.4226 22.755 33.0851 23.0948C32.7476 23.4347 32.329 23.6034 31.8292 23.6011H23.0095V32.4207C23.0095 32.9205 22.8402 33.3397 22.5015 33.6784C22.1628 34.0171 21.7442 34.1858 21.2456 34.1846C20.747 34.1835 20.3284 34.0141 19.9897 33.6766C19.651 33.3391 19.4817 32.9205 19.4817 32.4207V23.6011Z"
                          fill={colors.playpal["inactive-gray"]}
                        />
                      </Svg>
                    </View>
                    
                    {/* Text area */}
                    <View style={styles.cardTextArea}>
                      <Text style={styles.addPalsCardText}>create event</Text>
                    </View>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={styles.palCard}>
                    {/* Background */}
                    <View style={styles.cardBackground} />
                    
                    {/* Image area */}
                    <View style={styles.cardImageArea}>
                      {item.image ? (
                        <Image source={{ uri: item.image }} style={styles.cardImage} />
                      ) : (
                        <View style={styles.cardImagePlaceholder}>
                          <Text style={styles.cardImagePlaceholderText}>
                            {item.name.charAt(0).toUpperCase()}
                          </Text>
                        </View>
                      )}
                      
                      {item.status && (
                        <View
                          style={[
                            styles.cardStatusDot,
                            { backgroundColor: getStatusColor(item.status) },
                          ]}
                        />
                      )}
                    </View>
                    
                    {/* Text area */}
                    <View style={styles.cardTextArea}>
                      <Text style={styles.cardStatusText} numberOfLines={1}>
                        {item.subtitle || item.level || 'ready to play'}
                      </Text>
                    </View>
                    
                    {/* Remove button for create mode */}
                    {isCreateMode && item.canRemove && onRemovePal && (
                      <TouchableOpacity
                        onPress={() => onRemovePal(item.id)}
                        style={styles.cardRemoveButton}
                      >
                        <Svg width="14" height="16" viewBox="0 0 14 17" fill="none">
                          <Path
                            d="M9.375 16.25H4.375C3.5462 16.25 2.75134 15.9208 2.16529 15.3347C1.57924 14.7487 1.25 13.9538 1.25 13.125V5.625C1.25 5.45924 1.31585 5.30027 1.43306 5.18306C1.55027 5.06585 1.70924 5 1.875 5C2.04076 5 2.19973 5.06585 2.31694 5.18306C2.43415 5.30027 2.5 5.45924 2.5 5.625V13.125C2.5 13.6223 2.69754 14.0992 3.04917 14.4508C3.40081 14.8025 3.87772 15 4.375 15H9.375C9.87228 15 10.3492 14.8025 10.7008 14.4508C11.0525 14.0992 11.25 13.6223 11.25 13.125V5.625C11.25 5.45924 11.3158 5.30027 11.4331 5.18306C11.5503 5.06585 11.7092 5 11.875 5C12.0408 5 12.1997 5.06585 12.3169 5.18306C12.4342 5.30027 12.5 5.45924 12.5 5.625V13.125C12.5 13.9538 12.1708 14.7487 11.5847 15.3347C10.9987 15.9208 10.2038 16.25 9.375 16.25Z"
                            fill={colors.playpal.gray}
                          />
                          <Path
                            d="M13.125 3.75H0.625C0.45924 3.75 0.300269 3.68415 0.183058 3.56694C0.0658481 3.44973 0 3.29076 0 3.125C0 2.95924 0.0658481 2.80027 0.183058 2.68306C0.300269 2.56585 0.45924 2.5 0.625 2.5H13.125C13.2908 2.5 13.4497 2.56585 13.5669 2.68306C13.6842 2.80027 13.75 2.95924 13.75 3.125C13.75 3.29076 13.6842 3.44973 13.5669 3.56694C13.4497 3.68415 13.2908 3.75 13.125 3.75Z"
                            fill={colors.playpal.gray}
                          />
                          <Path
                            d="M9.375 3.75H4.375C4.20924 3.75 4.05027 3.68415 3.93306 3.56694C3.81585 3.44973 3.75 3.29076 3.75 3.125V1.875C3.75 1.37772 3.94754 0.900806 4.29917 0.549175C4.65081 0.197544 5.12772 0 5.625 0H8.125C8.62228 0 9.09919 0.197544 9.45083 0.549175C9.80246 0.900806 10 1.37772 10 1.875V3.125C10 3.29076 9.93415 3.44973 9.81694 3.56694C9.69973 3.68415 9.54076 3.75 9.375 3.75ZM5 2.5H8.75V1.875C8.75 1.70924 8.68415 1.55027 8.56694 1.43306C8.44973 1.31585 8.29076 1.25 8.125 1.25H5.625C5.45924 1.25 5.30027 1.31585 5.18306 1.43306C5.06585 1.55027 5 1.70924 5 1.875V2.5Z"
                            fill={colors.playpal.gray}
                          />
                          <Path
                            d="M5.625 12.5C5.45924 12.5 5.30027 12.4342 5.18306 12.3169C5.06585 12.1997 5 12.0408 5 11.875V7.5C5 7.33424 5.06585 7.17527 5.18306 7.05806C5.30027 6.94085 5.45924 6.875 5.625 6.875C5.79076 6.875 5.94973 6.94085 6.06694 7.05806C6.18415 7.17527 6.25 7.33424 6.25 7.5V11.875C6.25 12.0408 6.18415 12.1997 6.06694 12.3169C5.94973 12.4342 5.79076 12.5 5.625 12.5Z"
                            fill={colors.playpal.gray}
                          />
                          <Path
                            d="M8.125 12.5C7.95924 12.5 7.80027 12.4342 7.68306 12.3169C7.56585 12.1997 7.5 12.0408 7.5 11.875V7.5C7.5 7.33424 7.56585 7.17527 7.68306 7.05806C7.80027 6.94085 7.95924 6.875 8.125 6.875C8.29076 6.875 8.44973 6.94085 8.56694 7.05806C8.68415 7.17527 8.75 7.33424 8.75 7.5V11.875C8.75 12.0408 8.68415 12.1997 8.56694 12.3169C8.44973 12.4342 8.29076 12.5 8.125 12.5Z"
                            fill={colors.playpal.gray}
                          />
                        </Svg>
                      </TouchableOpacity>
                    )}
                  </TouchableOpacity>
                )}
              </View>
            );
          })}
          
          {/* Fill remaining columns with empty space */}
          {Array.from({ length: numColumns - rowItems.length }).map((_, index) => (
            <View
              key={`empty-${index}`}
              style={[styles.gridItem, { width: itemWidth, opacity: 0 }]}
            />
          ))}
        </View>
      );
    }
    return rows;
  };

  return (
    <View style={styles.container}>
      {renderGridItems()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gridRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16, // gap-4 equivalent
  },
  gridItem: {
    position: "relative",
  },
  
  // Card styles matching client PalCard structure
  palCard: {
    width: "100%",
    height: "100%",
  },
  addPalsCard: {
    width: "100%", 
    height: "100%",
  },
  cardBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.playpal["off-white"],
    borderRadius: 8,
  },
  cardImageArea: {
    position: "absolute",
    top: 2,
    left: 2,
    right: 2,
    height: "75%", // h-[75%] from client
    backgroundColor: colors.playpal.white,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    borderRadius: 6,
  },
  cardImagePlaceholder: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.playpal["inactive-gray"],
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  cardImagePlaceholderText: {
    fontFamily: typography.fontFamilies.bold,
    fontSize: 20,
    color: colors.playpal.white,
  },
  cardStatusDot: {
    position: "absolute",
    bottom: 8,
    right: 8,
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.playpal.white,
  },
  cardTextArea: {
    position: "absolute",
    bottom: 2,
    left: 2,
    right: 2,
    height: "25%", // h-[25%] from client
    justifyContent: "center",
    alignItems: "center",
  },
  cardStatusText: {
    fontFamily: typography.fontFamilies.bold,
    fontSize: 10,
    color: colors.playpal.gray,
    textAlign: "center",
  },
  addPalsCardText: {
    fontFamily: typography.fontFamilies.bold,
    fontSize: 10,
    color: colors.playpal["inactive-gray"],
    textAlign: "center",
  },
  cardRemoveButton: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 24,
    height: 24,
    backgroundColor: colors.playpal.white,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
});

export default Grid;
