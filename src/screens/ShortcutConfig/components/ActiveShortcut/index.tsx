import React from 'react';
import { TouchableOpacity, Pressable } from "react-native";
import { Text } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import DraggableFlatList, {
  RenderItemParams,
  ScaleDecorator,
} from "react-native-draggable-flatlist";
import { useDispatch } from "react-redux";
import HStack from "../../../../components/Stacks/HStack";
import VStack from '../../../../components/Stacks/VStack';
import { theme } from "../../../../theme/theme";
import { SCREEN_WIDTH } from "../../../../constants";
import { ICONS_MAP } from "../../../../constants/icons";
import {
  faPeopleGroup,
  faMinusCircle,
  faGripVertical,
} from "@fortawesome/free-solid-svg-icons";
import { reorderShortcuts } from "../../../../store/slices/shortcutsSlice";

interface Shortcut {
  id: string;
  label: string;
}

interface Props {
  shortcuts: Shortcut[];
  onRemove: (id: string) => void;
}

export default function ActiveShortcuts({ shortcuts, onRemove }: Props) {
  const dispatch = useDispatch();
  
  const containerWidth = SCREEN_WIDTH * 0.85;

  function renderItem({ item, drag, isActive }: RenderItemParams<Shortcut>) {
  return (
    <ScaleDecorator>
      <Pressable
        onLongPress={drag}
        disabled={isActive}
        style={{
          opacity: isActive ? 0.8 : 1,
          transform: [{ scale: isActive ? 1.02 : 1 }],
          width: '100%',
        }}
      >
        <HStack
          style={{
            padding: 12,
            width: '100%',
            minHeight: 60, 
            borderRadius: 12,
            backgroundColor: theme.colors.background,
            justifyContent: "space-between",
            alignItems: "center",
            shadowOffset: { width: 0, height: 2 },
            shadowColor: theme.colors.shadow,
            shadowOpacity: 0.25,
            shadowRadius: 2.84,
            elevation: 5,
          }}
        >
            <Pressable onPressIn={drag} hitSlop={20}>
              <FontAwesomeIcon
                icon={faGripVertical}
                size={18}
                color={theme.colors.secondary}
              />
            </Pressable>
            
            {/* Ícone do atalho */}
            <FontAwesomeIcon
              icon={ICONS_MAP[item.id] ?? faPeopleGroup}
              size={22}
              color={theme.colors.secondary}
            />
            
            {/* Label do atalho */}
            <Text
              style={{ 
                color: theme.colors.secondary,
                flex: 1,
                marginLeft: 8,
                marginRight: 8
              }}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.label}
            </Text>
            
            {/* Botão de remover */}
            <TouchableOpacity 
              onPress={() => onRemove(item.id)}
              hitSlop={10}
            >
              <FontAwesomeIcon
                icon={faMinusCircle}
                size={20}
                color={theme.colors.secondary}
              />
            </TouchableOpacity>
          </HStack>
        </Pressable>
      </ScaleDecorator>
    );
  }

  return (
   <DraggableFlatList
  data={shortcuts}
  keyExtractor={(item) => item.id}
  renderItem={renderItem}
  onDragEnd={({ data }) => dispatch(reorderShortcuts(data))}
  scrollEnabled={false}
  contentContainerStyle={{
    paddingVertical: 12,
    gap: 8,
    overflow: "visible",  
  }}
  style={{
    width: SCREEN_WIDTH * 0.85,
    alignSelf: "center",
    overflow: "visible",   
  }}
/>
  );
}