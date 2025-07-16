import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { colors, typography, borderRadius, spacing } from "../styles/theme";

interface EventSportLevelProps {
  title: string;
  onSportSelect?: (sport: string) => void;
  onLevelSelect?: (level: string) => void;
}

const sports = [
  {
    id: "pingpong",
    name: "Ping Pong",
    icon: (
      <Svg width="75" height="75" viewBox="0 0 75 75" fill="none">
        <Path
          d="M39.1379 52.1181C35.4598 53.1512 31.5517 52.9407 28.0076 51.525C24.4636 50.1092 21.4942 47.5455 19.5594 44.2548C17.6245 40.9641 16.8391 37.1377 17.3372 33.3495C17.8161 29.5614 19.5594 26.0602 22.2414 23.3626L23.8697 21.7364C26.5134 19.0961 29.9617 17.3742 33.659 16.8577C37.3755 16.3411 41.1494 17.0299 44.4253 18.8474L49.8084 13.567C50.6705 12.7252 51.8199 12.2277 53.0268 12.2086C54.2337 12.1895 55.4023 12.6295 56.2835 13.4522C57.1647 14.2749 57.7203 15.4036 57.7969 16.609C57.8735 17.8143 57.4904 19.0005 56.705 19.9188L56.4368 20.2058L51.1494 25.5819C52.8927 28.7387 53.6207 32.3738 53.1801 35.9515C52.7586 39.5292 51.2069 42.8964 48.7739 45.5558"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M31.4176 17.3742L52.6245 38.5534M35.2491 45.9958C35.2491 46.8759 35.4215 47.7559 35.7663 48.5786C36.1111 49.4013 36.6092 50.1475 37.2414 50.7788C37.8736 51.4102 38.6207 51.9076 39.4445 52.252C40.2682 52.5964 41.1494 52.7685 42.0307 52.7685C42.9119 52.7685 43.7931 52.5964 44.6169 52.252C45.4406 51.9076 46.1877 51.4102 46.8199 50.7788C47.4521 50.1475 47.9502 49.4013 48.295 48.5786C48.6399 47.7559 48.8123 46.8759 48.8123 45.9958C48.8123 45.1157 48.6399 44.2356 48.295 43.413C47.9502 42.5903 47.4521 41.8441 46.8199 41.2128C46.1877 40.5814 45.4406 40.084 44.6169 39.7396C43.7931 39.3952 42.9119 39.223 42.0307 39.223C41.1494 39.223 40.2682 39.3952 39.4445 39.7396C38.6207 40.084 37.8736 40.5814 37.2414 41.2128C36.6092 41.8441 36.1111 42.5903 35.7663 43.413C35.4215 44.2356 35.2491 45.1157 35.2491 45.9958Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    ),
  },
  {
    id: "trampolining",
    name: "Trampolining",
    icon: (
      <Svg width="47" height="47" viewBox="0 0 47 48" fill="none">
        <Path
          d="M22.4637 39.8854V32.0516C22.4637 31.479 22.9279 31.0148 23.5004 31.0148C24.0728 31.0151 24.5372 31.4792 24.5372 32.0516V39.8854C24.537 40.4576 24.0727 40.9219 23.5004 40.9221C22.928 40.9221 22.4639 40.4578 22.4637 39.8854ZM2.8799 35.9678V20.3016C2.8799 19.729 3.34407 19.2648 3.91666 19.2648C4.48925 19.2648 4.95343 19.729 4.95343 20.3016V35.9678C4.95343 36.5404 4.48925 37.0046 3.91666 37.0046C3.34407 37.0046 2.8799 36.5404 2.8799 35.9678ZM42.0461 35.9678V20.3016C42.0461 19.7292 42.5105 19.2651 43.0829 19.2648C43.6555 19.2648 44.1196 19.729 44.1196 20.3016V35.9678C44.1196 36.5404 43.6555 37.0046 43.0829 37.0046C42.5105 37.0043 42.0461 36.5403 42.0461 35.9678Z"
          fill="#15BDFB"
        />
        <Path
          d="M42.0461 20.3016C42.0461 17.5642 40.1915 14.9089 36.8137 12.8822C33.4567 10.8681 28.7523 9.58843 23.5004 9.58836C18.2483 9.58836 13.543 10.868 10.1858 12.8822C6.80814 14.9089 4.95343 17.5642 4.95343 20.3016C4.95343 23.039 6.80814 25.6943 10.1858 27.7209C13.543 29.7352 18.2483 31.0148 23.5004 31.0148C28.7523 31.0148 33.4567 29.7351 36.8137 27.7209C40.1915 25.6943 42.0461 23.039 42.0461 20.3016ZM44.1196 20.3016C44.1196 24.0533 41.5912 27.2729 37.8815 29.4988C34.151 31.7372 29.0637 33.0883 23.5004 33.0884C17.9371 33.0884 12.85 31.7372 9.11939 29.4988C5.40939 27.2728 2.8799 24.0535 2.8799 20.3016C2.8799 16.5497 5.40939 13.3304 9.11939 11.1044C12.85 8.86602 17.9371 7.51483 23.5004 7.51483C29.0637 7.5149 34.151 8.86604 37.8815 11.1044C41.5912 13.3303 44.1196 16.5499 44.1196 20.3016Z"
          fill="#15BDFB"
        />
      </Svg>
    ),
  },
  {
    id: "volleyball",
    name: "Beach Volleyball",
    icon: (
      <Svg width="47" height="47" viewBox="0 0 48 48" fill="none">
        <Path
          d="M23.5078 0C18.8584 0 14.3134 1.37871 10.4476 3.96178C6.58174 6.54485 3.56869 10.2163 1.78944 14.5118C0.0101851 18.8073 -0.455347 23.5339 0.451707 28.094C1.35876 32.654 3.59766 36.8427 6.88529 40.1303C10.1729 43.418 14.3616 45.6569 18.9217 46.5639C23.4817 47.471 28.2084 47.0054 32.5039 45.2262C36.7994 43.4469 40.4708 40.4339 43.0539 36.5681C45.6369 32.7022 47.0156 28.1572 47.0156 23.5078C47.0083 17.2754 44.5293 11.3003 40.1223 6.89336C35.7153 2.48638 29.7402 0.00731934 23.5078 0ZM42.722 31.3184C39.4348 33.604 35.5563 34.8894 31.5547 35.0194C27.5531 35.1495 23.5993 34.1186 20.1706 32.0513L24.3052 24.8906H44.2039C44.058 27.0988 43.5576 29.2692 42.722 31.3184ZM14.3582 4.89516C16.3421 3.91681 18.4703 3.26392 20.6615 2.96152C24.285 4.66517 27.3379 7.38114 29.4518 10.7816C31.5657 14.1821 32.6502 18.1217 32.5745 22.125H24.3052L14.3582 4.89516ZM44.2039 22.125H35.3401C35.4013 18.406 34.5801 14.7255 32.944 11.3852C31.308 8.04495 28.9035 5.13998 25.9277 2.90852C30.736 3.48004 35.1936 5.71299 38.5305 9.22161C41.8674 12.7302 43.8741 17.2942 44.2039 22.125ZM11.9659 6.28258L16.3933 13.9503C13.1424 15.7574 10.3658 18.3089 8.29113 21.3959C6.21644 24.4829 4.90261 28.0175 4.45728 31.7102C2.54071 27.2623 2.24234 22.2837 3.61397 17.6387C4.98561 12.9938 7.94062 8.97585 11.9659 6.28258ZM7.14454 36.2274C6.81199 32.2404 7.63956 28.2424 9.52753 24.7151C11.4155 21.1877 14.2833 18.2817 17.7853 16.3471L21.9107 23.5078L11.9659 40.733C10.1301 39.4962 8.50269 37.9753 7.14454 36.2274ZM23.5078 44.25C20.3348 44.2533 17.2037 43.5246 14.3582 42.1205L18.7878 34.4482C21.9763 36.3593 25.572 37.488 29.2807 37.742C32.9893 37.996 36.7054 37.3679 40.1246 35.9093C38.1959 38.4978 35.6892 40.5999 32.8042 42.048C29.9192 43.4961 26.7358 44.2501 23.5078 44.25Z"
          fill="#15BDFB"
        />
      </Svg>
    ),
  },
];

const levels = [
  { id: "beginner", name: "Beginner" },
  { id: "intermediate", name: "Intermediate" },
  { id: "advanced", name: "Advanced" },
  { id: "pro", name: "Pro" },
];

const EventSportLevel: React.FC<EventSportLevelProps> = ({
  title,
  onSportSelect,
  onLevelSelect,
}) => {
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [showLevels, setShowLevels] = useState<boolean>(false);
  const [completedSelection, setCompletedSelection] = useState<boolean>(false);

  const handleSportSelect = (sportId: string) => {
    setSelectedSport(sportId);
    setShowLevels(true);
    onSportSelect?.(sportId);
  };

  const handleLevelSelect = (levelId: string) => {
    setSelectedLevel(levelId);
    setShowLevels(false);
    setCompletedSelection(true);
    onLevelSelect?.(levelId);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>My Sports / Sport</Text>
          <Text style={styles.subtitle}>
            Set your preferred sports and level.
          </Text>
        </View>
        <TouchableOpacity style={styles.searchButton}>
          <Svg width="33" height="34" viewBox="0 0 33 34" fill="none">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.9351 21.6005C18.1165 23.0536 15.8107 23.7551 13.491 23.5611C11.1714 23.3671 9.01409 22.2923 7.4622 20.5573C5.9103 18.8224 5.08162 16.5591 5.14636 14.2323C5.21109 11.9055 6.16432 9.69174 7.81028 8.04578C9.45623 6.39983 11.67 5.44659 13.9968 5.38186C16.3236 5.31713 18.5869 6.14581 20.3218 7.6977C22.0568 9.2496 23.1316 11.4069 23.3256 13.7265C23.5196 16.0462 22.8181 18.352 21.365 20.1706L28.3206 27.1248C28.42 27.2174 28.4997 27.3291 28.555 27.4532C28.6103 27.5773 28.64 27.7113 28.6424 27.8471C28.6448 27.983 28.6198 28.1179 28.5689 28.2439C28.5181 28.3699 28.4423 28.4843 28.3462 28.5804C28.2502 28.6765 28.1357 28.7522 28.0097 28.8031C27.8838 28.854 27.7488 28.879 27.613 28.8766C27.4771 28.8742 27.3431 28.8444 27.219 28.7892C27.0949 28.7339 26.9832 28.6541 26.8906 28.5547L19.9351 21.6005ZM9.24408 19.4934C8.25395 18.5031 7.57959 17.2416 7.30623 15.8682C7.03286 14.4949 7.17276 13.0713 7.70823 11.7774C8.24371 10.4835 9.15074 9.37736 10.3147 8.59881C11.4786 7.82026 12.8472 7.40422 14.2475 7.40328C15.6479 7.40234 17.017 7.81653 18.182 8.59351C19.347 9.37049 20.2555 10.4754 20.7927 11.7686C21.33 13.0617 21.4718 14.4851 21.2003 15.8589C20.9287 17.2326 20.2561 18.495 19.2673 19.4866L19.2605 19.4934L19.2538 19.4987C17.9251 20.8243 16.1247 21.5683 14.2478 21.5673C12.371 21.5663 10.5713 20.8204 9.24408 19.4934Z"
              fill="#15BDFB"
            />
          </Svg>
        </TouchableOpacity>
      </View>

      {completedSelection ? (
        <View style={styles.completedCard}>
          <View style={styles.completedIconContainer}>
            {sports.find((sport) => sport.id === selectedSport)?.icon}
          </View>
          <View style={styles.completedTextContainer}>
            <Text style={styles.completedSport}>
              {sports.find((sport) => sport.id === selectedSport)?.name}
            </Text>
            <Text style={styles.completedLevel}>
              {levels.find((level) => level.id === selectedLevel)?.name}
            </Text>
          </View>
        </View>
      ) : showLevels ? (
        <ScrollView
          style={styles.levelsContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.levelsHeader}>
            <Text style={styles.levelsTitle}>Select Level</Text>
          </View>
          {levels.map((level) => (
            <TouchableOpacity
              key={level.id}
              onPress={() => handleLevelSelect(level.id)}
              style={styles.levelOption}
            >
              <Text style={styles.levelText}>{level.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <View style={styles.sportsGrid}>
          {sports.map((sport) => (
            <TouchableOpacity
              key={sport.id}
              onPress={() => handleSportSelect(sport.id)}
              style={styles.sportCard}
            >
              <View style={styles.sportIconContainer}>{sport.icon}</View>
              <Text style={styles.sportName}>{sport.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.playpal.white,
    borderRadius: 8,
    padding: 20,
    shadowColor: colors.playpal["inactive-gray"],
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 40,
    elevation: 10,
    minHeight: 216,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 25,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontFamily: typography.fontFamilies.bold,
    fontSize: 20,
    color: colors.playpal.gray,
    lineHeight: 24,
    letterSpacing: -0.4,
  },
  subtitle: {
    fontFamily: typography.fontFamilies.regular,
    fontSize: 12,
    color: colors.playpal.gray,
    lineHeight: 16.8,
    marginTop: 1,
  },
  searchButton: {
    padding: 0,
  },
  sportsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  sportCard: {
    width: 62,
    height: 82,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 4,
  },
  sportIconContainer: {
    width: 62,
    height: 62,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.playpal.blue,
    backgroundColor: colors.playpal.white,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  sportName: {
    fontFamily: typography.fontFamilies.bold,
    fontSize: 10,
    color: "rgba(71, 75, 105, 0.95)",
    textAlign: "center",
    lineHeight: 11,
    height: 22,
  },
  levelsContainer: {
    maxHeight: 120,
  },
  levelsHeader: {
    marginBottom: 15,
  },
  levelsTitle: {
    fontFamily: typography.fontFamilies.regular,
    fontSize: 10,
    color: "rgba(71, 75, 105, 0.95)",
    lineHeight: 15,
    textAlign: "center",
  },
  levelOption: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(71, 75, 105, 0.1)",
  },
  levelText: {
    fontFamily: typography.fontFamilies.regular,
    fontSize: 10,
    color: "rgba(71, 75, 105, 0.95)",
    lineHeight: 16,
    textAlign: "center",
  },
  completedCard: {
    backgroundColor: colors.playpal.blue,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    gap: 12,
  },
  completedIconContainer: {
    width: 62,
    height: 62,
    borderRadius: 8,
    backgroundColor: colors.playpal.blue,
    justifyContent: "center",
    alignItems: "center",
  },
  completedTextContainer: {
    flex: 1,
  },
  completedSport: {
    fontFamily: typography.fontFamilies.bold,
    fontSize: 10,
    color: colors.playpal.white,
    lineHeight: 13,
  },
  completedLevel: {
    fontFamily: typography.fontFamilies.bold,
    fontSize: 10,
    color: colors.playpal.white,
    lineHeight: 13,
    opacity: 0.8,
  },
});

export default EventSportLevel;
