import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import Svg, { Path, G, Defs, ClipPath, Rect } from "react-native-svg";
import Box from "./Box";
import { colors, typography, borderRadius, spacing } from "../styles/theme";

interface TimeSlot {
  start: string;
  end: string;
}

interface DaySchedule {
  day: string;
  timeSlots: TimeSlot[];
  isSelected?: boolean;
}

interface ScheduleProps {
  onScheduleChange?: (schedule: DaySchedule[]) => void;
  initialSchedule?: DaySchedule[];
  title?: string;
}

const Schedule: React.FC<ScheduleProps> = ({
  onScheduleChange,
  initialSchedule = [],
  title = "My Schedule / Schedule",
}) => {
  const days = ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"];

  const [schedule, setSchedule] = useState<DaySchedule[]>(() => {
    return days.map((day) => {
      const existing = initialSchedule.find((s) => s.day === day);
      return {
        day,
        timeSlots: existing?.timeSlots || [],
        isSelected: existing?.isSelected || false,
      };
    });
  });

  const [activeDayForAdding, setActiveDayForAdding] = useState<string | null>(
    null,
  );
  const [selectedStart, setSelectedStart] = useState("");
  const [editingSpecificTimeSlot, setEditingSpecificTimeSlot] = useState<{
    day: string;
    index: number;
    isEditing: boolean;
  } | null>(null);

  const timeOptions = [
    "06:00",
    "06:30",
    "07:00",
    "07:30",
    "08:00",
    "08:30",
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
  ];

  // SVG Icons - exact from React version
  const PlusIcon = () => (
    <Svg width="22" height="22" viewBox="0 0 23 23" fill="none">
      <Path
        d="M10.2296 12.3901H5.67901C5.42115 12.3901 5.20514 12.3028 5.03101 12.128C4.85687 11.9533 4.7695 11.7373 4.76889 11.48C4.76829 11.2228 4.85566 11.0068 5.03101 10.832C5.20636 10.6573 5.42236 10.5699 5.67901 10.5699H10.2296V6.01931C10.2296 5.76145 10.317 5.54545 10.4917 5.37131C10.6665 5.19717 10.8825 5.1098 11.1397 5.1092C11.397 5.10859 11.6133 5.19596 11.7886 5.37131C11.964 5.54666 12.0511 5.76266 12.0498 6.01931V10.5699H16.6004C16.8583 10.5699 17.0746 10.6573 17.2494 10.832C17.4241 11.0068 17.5112 11.2228 17.5106 11.48C17.51 11.7373 17.4226 11.9536 17.2484 12.1289C17.0743 12.3043 16.8583 12.3914 16.6004 12.3901H12.0498V16.9407C12.0498 17.1986 11.9625 17.4149 11.7877 17.5897C11.613 17.7644 11.397 17.8515 11.1397 17.8509C10.8825 17.8503 10.6665 17.7629 10.4917 17.5887C10.317 17.4146 10.2296 17.1986 10.2296 16.9407V12.3901Z"
        fill="#B0B1B8"
      />
    </Svg>
  );

  const EditIcon = () => (
    <Svg width="21" height="20" viewBox="0 0 21 21" fill="none">
      <Path
        d="M6.22916 6.75772H5.37499C4.92191 6.75772 4.48739 6.93297 4.16702 7.24493C3.84664 7.55688 3.66666 7.97998 3.66666 8.42114V15.9065C3.66666 16.3477 3.84664 16.7708 4.16702 17.0828C4.48739 17.3947 4.92191 17.57 5.37499 17.57H13.0625C13.5156 17.57 13.9501 17.3947 14.2705 17.0828C14.5908 16.7708 14.7708 16.3477 14.7708 15.9065V15.0748"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.9167 5.0943L16.4792 7.58943M17.6622 6.41256C17.9986 6.08499 18.1876 5.64072 18.1876 5.17747C18.1876 4.71422 17.9986 4.26994 17.6622 3.94238C17.3258 3.61481 16.8695 3.43079 16.3937 3.43079C15.918 3.43079 15.4617 3.61481 15.1253 3.94238L7.9375 10.9163V13.4114H10.5L17.6622 6.41256Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  const DeleteIcon = () => (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <G clipPath="url(#clip0_delete)">
        <Path
          d="M12.5 18.125H7.5C6.6712 18.125 5.87634 17.7958 5.29029 17.2097C4.70424 16.6237 4.375 15.8288 4.375 15V7.5C4.375 7.33424 4.44085 7.17527 4.55806 7.05806C4.67527 6.94085 4.83424 6.875 5 6.875C5.16576 6.875 5.32473 6.94085 5.44194 7.05806C5.55915 7.17527 5.625 7.33424 5.625 7.5V15C5.625 15.4973 5.82254 15.9742 6.17417 16.3258C6.52581 16.6775 7.00272 16.875 7.5 16.875H12.5C12.9973 16.875 13.4742 16.6775 13.8258 16.3258C14.1775 15.9742 14.375 15.4973 14.375 15V7.5C14.375 7.33424 14.4408 7.17527 14.5581 7.05806C14.6753 6.94085 14.8342 6.875 15 6.875C15.1658 6.875 15.3247 6.94085 15.4419 7.05806C15.5592 7.17527 15.625 7.33424 15.625 7.5V15C15.625 15.8288 15.2958 16.6237 14.7097 17.2097C14.1237 17.7958 13.3288 18.125 12.5 18.125Z"
          fill="white"
        />
        <Path
          d="M16.25 5.625H3.75C3.58424 5.625 3.42527 5.55915 3.30806 5.44194C3.19085 5.32473 3.125 5.16576 3.125 5C3.125 4.83424 3.19085 4.67527 3.30806 4.55806C3.42527 4.44085 3.58424 4.375 3.75 4.375H16.25C16.4158 4.375 16.5747 4.44085 16.6919 4.55806C16.8092 4.67527 16.875 4.83424 16.875 5C16.875 5.16576 16.8092 5.32473 16.6919 5.44194C16.5747 5.55915 16.4158 5.625 16.25 5.625Z"
          fill="white"
        />
        <Path
          d="M12.5 5.625H7.5C7.33424 5.625 7.17527 5.55915 7.05806 5.44194C6.94085 5.32473 6.875 5.16576 6.875 5V3.75C6.875 3.25272 7.07254 2.77581 7.42417 2.42417C7.77581 2.07254 8.25272 1.875 8.75 1.875H11.25C11.7473 1.875 12.2242 2.07254 12.5758 2.42417C12.9275 2.77581 13.125 3.25272 13.125 3.75V5C13.125 5.16576 13.0592 5.32473 12.9419 5.44194C12.8247 5.55915 12.6658 5.625 12.5 5.625ZM8.125 4.375H11.875V3.75C11.875 3.58424 11.8092 3.42527 11.6919 3.30806C11.5747 3.19085 11.4158 3.125 11.25 3.125H8.75C8.58424 3.125 8.42527 3.19085 8.30806 3.30806C8.19085 3.42527 8.125 3.58424 8.125 3.75V4.375Z"
          fill="white"
        />
        <Path
          d="M8.75 14.375C8.58424 14.375 8.42527 14.3092 8.30806 14.1919C8.19085 14.0747 8.125 13.9158 8.125 13.75V9.375C8.125 9.20924 8.19085 9.05027 8.30806 8.93306C8.42527 8.81585 8.58424 8.75 8.75 8.75C8.91576 8.75 9.07473 8.81585 9.19194 8.93306C9.30915 9.05027 9.375 9.20924 9.375 9.375V13.75C9.375 13.9158 9.30915 14.0747 9.19194 14.1919C9.07473 14.3092 8.91576 14.375 8.75 14.375Z"
          fill="white"
        />
        <Path
          d="M11.25 14.375C11.0842 14.375 10.9253 14.3092 10.8081 14.1919C10.6908 14.0747 10.625 13.9158 10.625 13.75V9.375C10.625 9.20924 10.6908 9.05027 10.8081 8.93306C10.9253 8.81585 11.0842 8.75 11.25 8.75C11.4158 8.75 11.5747 8.81585 11.6919 8.93306C11.8092 9.05027 11.875 9.20924 11.875 9.375V13.75C11.875 13.9158 11.8092 14.0747 11.6919 14.1919C11.5747 14.3092 11.4158 14.375 11.25 14.375Z"
          fill="white"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_delete">
          <Rect width="20" height="20" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );

  const PlaceholderCalendarIcon = () => (
    <Svg width="26" height="27" viewBox="0 0 26 27" fill="none">
      <Path
        d="M8 1V6M18 1V6"
        stroke="#15BDFB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.75 3.5H4.25C2.86929 3.5 1.75 4.61929 1.75 6V23.5C1.75 24.8807 2.86929 26 4.25 26H21.75C23.1307 26 24.25 24.8807 24.25 23.5V6C24.25 4.61929 23.1307 3.5 21.75 3.5Z"
        stroke="#15BDFB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1.75 11H24.25"
        stroke="#15BDFB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  const { width: screenWidth } = Dimensions.get("window");

  // Get responsive sizing
  const getColumnWidth = () => {
    if (screenWidth >= 768) return 60; // md:w-[60px]
    if (screenWidth >= 375) return 40; // sm:w-10
    return 32; // xs:w-8
  };

  const getColumnHeight = () => {
    if (screenWidth >= 768) return 60; // md:h-[60px]
    if (screenWidth >= 375) return 40; // sm:h-10
    return 32; // xs:h-8
  };

  const getTextSize = () => {
    if (screenWidth >= 768) return 12.8; // md:text-[0.80rem]
    if (screenWidth >= 375) return 10.4; // sm:text-[0.65rem]
    return 8.8; // xs:text-[0.55rem]
  };

  const columnWidth = getColumnWidth();
  const columnHeight = getColumnHeight();
  const textSize = getTextSize();

  // Simplified handlers for React Native
  const handleAddSlotClick = (day: string) => {
    setActiveDayForAdding(day);
    setEditingSpecificTimeSlot(null);
    setSelectedStart("");
  };

  const handleDisplayClick = (day: string, index: number) => {
    setEditingSpecificTimeSlot({ day, index, isEditing: false });
    setActiveDayForAdding(null);
    setSelectedStart("");
  };

  const handleEditTimeSlot = (day: string, timeSlotIndex: number) => {
    setEditingSpecificTimeSlot({ day, index: timeSlotIndex, isEditing: true });
    setActiveDayForAdding(null);
    setSelectedStart("");
  };

  const handleDelete = (day: string, timeSlotIndex: number) => {
    const newSchedule = schedule.map((s) =>
      s.day === day
        ? {
            ...s,
            timeSlots: s.timeSlots
              .filter((_, index) => index !== timeSlotIndex)
              .sort((a, b) => a.start.localeCompare(b.start)),
          }
        : s,
    );

    const updatedScheduleWithIsSelected = newSchedule.map((s) => ({
      ...s,
      isSelected: s.timeSlots.length > 0,
    }));

    setSchedule(updatedScheduleWithIsSelected);
    onScheduleChange?.(updatedScheduleWithIsSelected);
    setEditingSpecificTimeSlot(null);
    setActiveDayForAdding(null);
    setSelectedStart("");
  };

  const handleTimeConfirm = (endTime: string) => {
    if (activeDayForAdding) {
      // Adding a new time slot
      const newSchedule = schedule.map((s) => {
        if (s.day === activeDayForAdding) {
          const newTimeSlots = [
            ...s.timeSlots,
            { start: selectedStart, end: endTime },
          ].sort((a, b) => a.start.localeCompare(b.start));
          return {
            ...s,
            timeSlots: newTimeSlots,
            isSelected: newTimeSlots.length > 0,
          };
        }
        return s;
      });
      setSchedule(newSchedule);
      onScheduleChange?.(newSchedule);
      setActiveDayForAdding(null);
      setSelectedStart("");
    } else if (editingSpecificTimeSlot && editingSpecificTimeSlot.isEditing) {
      // Editing an existing time slot
      const newSchedule = schedule.map((s) => {
        if (s.day === editingSpecificTimeSlot.day) {
          const updatedTimeSlots = s.timeSlots
            .map((ts, index) =>
              index === editingSpecificTimeSlot.index
                ? { start: selectedStart, end: endTime }
                : ts,
            )
            .sort((a, b) => a.start.localeCompare(b.start));
          return {
            ...s,
            timeSlots: updatedTimeSlots,
          };
        }
        return s;
      });
      setSchedule(newSchedule);
      onScheduleChange?.(newSchedule);
      setEditingSpecificTimeSlot(null);
      setSelectedStart("");
    }
  };

  const handleStartTimeSelect = (time: string) => {
    setSelectedStart(time);
  };

  const handleClearSelection = () => {
    setEditingSpecificTimeSlot(null);
    setActiveDayForAdding(null);
    setSelectedStart("");
  };

  return (
    <Box style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>Set your preferred schedule</Text>
        </View>
        <TouchableOpacity
          onPress={() => console.log("Schedule Icon Clicked!")}
          style={styles.calendarButton}
        >
          <PlaceholderCalendarIcon />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Day headers */}
        <View style={styles.dayHeaders}>
          {days.map((day) => (
            <View key={day} style={[styles.dayHeader, { width: columnWidth }]}>
              <Text style={styles.dayHeaderText}>{day}</Text>
            </View>
          ))}
        </View>

        {/* Schedule grid */}
        <View style={styles.scheduleGrid}>
          {schedule.map((daySchedule) => {
            const isDayCurrentlyAdding = activeDayForAdding === daySchedule.day;

            return (
              <View
                key={daySchedule.day}
                style={[styles.dayColumn, { width: columnWidth }]}
              >
                {/* Existing time slots */}
                {daySchedule.timeSlots.map((timeSlot, index) => {
                  const isThisTimeSlotBeingEdited =
                    editingSpecificTimeSlot?.day === daySchedule.day &&
                    editingSpecificTimeSlot?.index === index;

                  if (
                    isThisTimeSlotBeingEdited &&
                    editingSpecificTimeSlot?.isEditing
                  ) {
                    // Time picker for editing
                    return (
                      <View key={index} style={styles.timePickerContainer}>
                        <Text style={styles.timePickerLabel}>Start</Text>
                        <ScrollView
                          style={[
                            styles.timePickerScroll,
                            { width: columnWidth },
                          ]}
                          showsVerticalScrollIndicator={false}
                        >
                          {timeOptions.map((time) => (
                            <TouchableOpacity
                              key={time}
                              onPress={() => handleStartTimeSelect(time)}
                              style={[
                                styles.timeOption,
                                selectedStart === time &&
                                  styles.selectedTimeOption,
                              ]}
                            >
                              <Text
                                style={[
                                  styles.timeOptionText,
                                  { fontSize: textSize },
                                  selectedStart === time &&
                                    styles.selectedTimeOptionText,
                                ]}
                              >
                                {time}
                              </Text>
                            </TouchableOpacity>
                          ))}
                        </ScrollView>
                        {selectedStart && (
                          <>
                            <Text style={styles.timePickerLabel}>End</Text>
                            <ScrollView
                              style={[
                                styles.timePickerScroll,
                                { width: columnWidth },
                              ]}
                              showsVerticalScrollIndicator={false}
                            >
                              {timeOptions
                                .filter((time) => time > selectedStart)
                                .map((time) => (
                                  <TouchableOpacity
                                    key={time}
                                    onPress={() => handleTimeConfirm(time)}
                                    style={styles.timeOption}
                                  >
                                    <Text
                                      style={[
                                        styles.timeOptionText,
                                        { fontSize: textSize },
                                      ]}
                                    >
                                      {time}
                                    </Text>
                                  </TouchableOpacity>
                                ))}
                            </ScrollView>
                          </>
                        )}
                      </View>
                    );
                  } else if (
                    isThisTimeSlotBeingEdited &&
                    !editingSpecificTimeSlot?.isEditing
                  ) {
                    // Edit/delete options
                    return (
                      <View
                        key={index}
                        style={[
                          styles.timeSlotEditing,
                          {
                            width: columnWidth,
                            height: 80,
                          },
                        ]}
                      >
                        <View style={styles.timeDisplay}>
                          <Text
                            style={[styles.timeText, { fontSize: textSize }]}
                          >
                            {timeSlot.start}
                          </Text>
                          <Text
                            style={[styles.timeText, { fontSize: textSize }]}
                          >
                            {timeSlot.end}
                          </Text>
                        </View>
                        <View style={styles.editButtons}>
                          <TouchableOpacity
                            onPress={() =>
                              handleEditTimeSlot(daySchedule.day, index)
                            }
                            style={styles.editButton}
                          >
                            <EditIcon />
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => handleDelete(daySchedule.day, index)}
                            style={styles.deleteButton}
                          >
                            <DeleteIcon />
                          </TouchableOpacity>
                        </View>
                      </View>
                    );
                  } else {
                    // Default time slot display
                    return (
                      <TouchableOpacity
                        key={index}
                        onPress={() =>
                          handleDisplayClick(daySchedule.day, index)
                        }
                        style={[
                          styles.timeSlot,
                          {
                            width: columnWidth,
                            height: columnHeight,
                          },
                        ]}
                      >
                        <Text style={[styles.timeText, { fontSize: textSize }]}>
                          {timeSlot.start}
                        </Text>
                        <Text style={[styles.timeText, { fontSize: textSize }]}>
                          {timeSlot.end}
                        </Text>
                      </TouchableOpacity>
                    );
                  }
                })}

                {/* Add new slot or plus button */}
                {activeDayForAdding === daySchedule.day &&
                !editingSpecificTimeSlot ? (
                  <View style={styles.timePickerContainer}>
                    <Text style={styles.timePickerLabel}>Start</Text>
                    <ScrollView
                      style={[styles.timePickerScroll, { width: columnWidth }]}
                      showsVerticalScrollIndicator={false}
                    >
                      {timeOptions.map((time) => (
                        <TouchableOpacity
                          key={time}
                          onPress={() => handleStartTimeSelect(time)}
                          style={[
                            styles.timeOption,
                            selectedStart === time && styles.selectedTimeOption,
                          ]}
                        >
                          <Text
                            style={[
                              styles.timeOptionText,
                              { fontSize: textSize },
                              selectedStart === time &&
                                styles.selectedTimeOptionText,
                            ]}
                          >
                            {time}
                          </Text>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                    {selectedStart && (
                      <>
                        <Text style={styles.timePickerLabel}>End</Text>
                        <ScrollView
                          style={[
                            styles.timePickerScroll,
                            { width: columnWidth },
                          ]}
                          showsVerticalScrollIndicator={false}
                        >
                          {timeOptions
                            .filter((time) => time > selectedStart)
                            .map((time) => (
                              <TouchableOpacity
                                key={time}
                                onPress={() => handleTimeConfirm(time)}
                                style={styles.timeOption}
                              >
                                <Text
                                  style={[
                                    styles.timeOptionText,
                                    { fontSize: textSize },
                                  ]}
                                >
                                  {time}
                                </Text>
                              </TouchableOpacity>
                            ))}
                        </ScrollView>
                      </>
                    )}
                  </View>
                ) : (
                  // Plus button
                  !isDayCurrentlyAdding &&
                  !(
                    editingSpecificTimeSlot?.day === daySchedule.day &&
                    editingSpecificTimeSlot?.isEditing
                  ) && (
                    <TouchableOpacity
                      onPress={() => handleAddSlotClick(daySchedule.day)}
                      style={[
                        styles.addButton,
                        {
                          width: columnWidth,
                          height: columnHeight,
                        },
                      ]}
                    >
                      <PlusIcon />
                    </TouchableOpacity>
                  )
                )}
              </View>
            );
          })}
        </View>
      </View>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing[4], // p-4
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: spacing[6], // mb-6
  },
  headerContent: {
    flex: 1,
  },
  title: {
    color: colors.playpal.gray,
    fontWeight: "700" as const,
    fontSize: typography.fontSizes.xl,
    lineHeight: 24,
    marginBottom: 4,
    fontFamily: typography.fontFamilies.bold,
  },
  subtitle: {
    color: colors.playpal.gray,
    fontSize: typography.fontSizes.xs,
    lineHeight: 20,
    fontFamily: typography.fontFamilies.regular,
  },
  calendarButton: {
    padding: 4,
    borderRadius: borderRadius.DEFAULT,
    marginTop: -4,
  },
  content: {
    gap: spacing[3], // space-y-3
  },
  dayHeaders: {
    flexDirection: "row",
    gap: spacing[2], // gap-2
    justifyContent: "center",
  },
  dayHeader: {
    justifyContent: "center",
    alignItems: "center",
  },
  dayHeaderText: {
    color: colors.playpal.gray,
    fontWeight: "700" as const,
    fontSize: typography.fontSizes.sm,
    fontFamily: typography.fontFamilies.bold,
  },
  scheduleGrid: {
    flexDirection: "row",
    gap: spacing[2], // gap-2
    justifyContent: "center",
  },
  dayColumn: {
    alignItems: "center",
    gap: spacing[2],
  },
  timeSlot: {
    backgroundColor: colors.playpal.blue,
    borderColor: colors.playpal.blue,
    borderWidth: 1,
    borderRadius: borderRadius.lg,
    justifyContent: "center",
    alignItems: "center",
  },
  timeSlotEditing: {
    backgroundColor: colors.playpal.blue,
    borderColor: colors.playpal.blue,
    borderWidth: 1,
    borderRadius: borderRadius.lg,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 4,
    shadowColor: colors.playpal["inactive-gray"],
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 22,
    elevation: 10,
  },
  timeDisplay: {
    alignItems: "center",
    marginTop: 4,
  },
  timeText: {
    color: colors.playpal.white,
    fontWeight: "700" as const,
    lineHeight: 12,
    fontFamily: typography.fontFamilies.bold,
  },
  editButtons: {
    alignItems: "center",
    gap: 2,
    marginBottom: 4,
  },
  editButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  deleteButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  addButton: {
    borderColor: colors.playpal.blue,
    borderWidth: 1,
    borderRadius: borderRadius.lg,
    backgroundColor: colors.playpal.white,
    justifyContent: "center",
    alignItems: "center",
  },
  timePickerContainer: {
    borderColor: colors.playpal.blue,
    borderWidth: 1,
    borderRadius: borderRadius.lg,
    alignItems: "center",
    gap: 4,
    padding: 2,
  },
  timePickerLabel: {
    fontWeight: "700" as const,
    color: colors.playpal.blue,
    fontSize: typography.fontSizes.xs,
    fontFamily: typography.fontFamilies.bold,
  },
  timePickerScroll: {
    height: 45,
    backgroundColor: colors.playpal.blue,
    borderColor: colors.playpal.blue,
    borderWidth: 1,
    borderRadius: borderRadius.lg,
  },
  timeOption: {
    backgroundColor: colors.playpal.blue,
    borderColor: colors.playpal.blue,
    borderWidth: 1,
    borderRadius: borderRadius.DEFAULT,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 2,
  },
  selectedTimeOption: {
    backgroundColor: colors.playpal.white,
  },
  timeOptionText: {
    color: colors.playpal.white,
    fontFamily: typography.fontFamilies.regular,
  },
  selectedTimeOptionText: {
    color: colors.playpal["inactive-gray"],
  },
});

export default Schedule;
