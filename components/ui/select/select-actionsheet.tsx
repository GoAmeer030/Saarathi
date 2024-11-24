import { H4 } from "@expo/html-elements";
import { createActionsheet } from "@gluestack-ui/actionsheet";
import {
  Pressable,
  View,
  Text,
  ScrollView,
  VirtualizedList,
  FlatList,
  SectionList,
  Platform,
} from "react-native";

import { tva } from "@gluestack-ui/nativewind-utils/tva";
import type { VariantProps } from "@gluestack-ui/nativewind-utils";
import { withStyleContext } from "@gluestack-ui/nativewind-utils/withStyleContext";
import { withStyleContextAndStates } from "@gluestack-ui/nativewind-utils/withStyleContextAndStates";
import { cssInterop } from "nativewind";
import {
  Motion,
  AnimatePresence,
  createMotionAnimatedComponent,
} from "@legendapp/motion";

import React, { useMemo } from "react";
import { Svg } from "react-native-svg";

const AnimatedPressable = createMotionAnimatedComponent(Pressable);

type IPrimitiveIcon = {
  height?: number | string;
  width?: number | string;
  fill?: string;
  color?: string;
  size?: number | string;
  stroke?: string;
  as?: React.ElementType;
  className?: string;
};

const PrimitiveIcon = React.forwardRef<
  React.ElementRef<typeof Svg>,
  IPrimitiveIcon
>(({ height, width, fill, color, size, stroke, as: AsComp, ...props }, ref) => {
  const sizeProps = useMemo(() => {
    if (size) return { size };
    if (height && width) return { height, width };
    if (height) return { height };
    if (width) return { width };
    return {};
  }, [size, height, width]);

  let colorProps = {};
  if (color) {
    colorProps = { ...colorProps, color: color };
  }
  if (stroke) {
    colorProps = { ...colorProps, stroke: stroke };
  }
  if (fill) {
    colorProps = { ...colorProps, fill: fill };
  }
  if (AsComp) {
    return <AsComp ref={ref} {...sizeProps} {...colorProps} {...props} />;
  }
  return (
    <Svg ref={ref} height={height} width={width} {...colorProps} {...props} />
  );
});

export const UIActionsheet = createActionsheet({
  Root: View,
  Content: withStyleContext(Motion.View),
  Item:
    Platform.OS === "web"
      ? withStyleContext(Pressable)
      : withStyleContextAndStates(Pressable),
  ItemText: Text,
  DragIndicator: View,
  IndicatorWrapper: View,
  Backdrop: AnimatedPressable,
  ScrollView: ScrollView,
  VirtualizedList: VirtualizedList,
  FlatList: FlatList,
  SectionList: SectionList,
  SectionHeaderText: H4,
  Icon: PrimitiveIcon,
  AnimatePresence: AnimatePresence,
});

cssInterop(UIActionsheet, { className: "style" });
cssInterop(UIActionsheet.Content, { className: "style" });
cssInterop(UIActionsheet.Item, { className: "style" });
cssInterop(UIActionsheet.ItemText, { className: "style" });
cssInterop(UIActionsheet.DragIndicator, { className: "style" });
cssInterop(UIActionsheet.DragIndicatorWrapper, { className: "style" });
cssInterop(UIActionsheet.Backdrop, { className: "style" });
cssInterop(UIActionsheet.ScrollView, {
  className: "style",
  contentContainerClassName: "contentContainerStyle",
  indicatorClassName: "indicatorStyle",
});
cssInterop(UIActionsheet.VirtualizedList, {
  className: "style",
  ListFooterComponentClassName: "ListFooterComponentStyle",
  ListHeaderComponentClassName: "ListHeaderComponentStyle",
  contentContainerClassName: "contentContainerStyle",
  indicatorClassName: "indicatorStyle",
});
cssInterop(UIActionsheet.FlatList, {
  className: "style",
  ListFooterComponentClassName: "ListFooterComponentStyle",
  ListHeaderComponentClassName: "ListHeaderComponentStyle",
  columnWrapperClassName: "columnWrapperStyle",
  contentContainerClassName: "contentContainerStyle",
  indicatorClassName: "indicatorStyle",
});
cssInterop(UIActionsheet.SectionList, { className: "style" });
cssInterop(UIActionsheet.SectionHeaderText, { className: "style" });
cssInterop(UIActionsheet.Icon, { className: "style" });

const actionsheetStyle = tva({ base: "h-full w-full web:pointer-events-none" });

const actionsheetContentStyle = tva({
  base: "items-center rounded-tl-3xl rounded-tr-3xl bg-background-0 p-2 shadow-lg web:pointer-events-auto web:select-none",
});

const actionsheetItemStyle = tva({
  base: "w-full flex-row items-center rounded-sm p-3 hover:bg-background-50 active:bg-background-100 data-[checked=true]:bg-background-100 data-[focus=true]:bg-background-100 web:data-[focus-visible=true]:bg-background-100 data-[disabled=true]:opacity-40 data-[disabled=true]:web:pointer-events-auto data-[disabled=true]:web:cursor-not-allowed",
});

const actionsheetItemTextStyle = tva({
  base: "font-body tracking-md mx-2 text-left font-normal text-typography-700",
  variants: {
    isTruncated: {
      true: "",
    },
    bold: {
      true: "font-bold",
    },
    underline: {
      true: "underline",
    },
    strikeThrough: {
      true: "line-through",
    },
    size: {
      "2xs": "text-2xs",
      xs: "text-xs",
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const actionsheetDragIndicatorStyle = tva({
  base: "h-1 w-16 rounded-full bg-background-400",
});

const actionsheetDragIndicatorWrapperStyle = tva({
  base: "w-full items-center py-1",
});

const actionsheetBackdropStyle = tva({
  base: "absolute bottom-0 left-0 right-0 top-0 bg-background-dark web:pointer-events-auto web:cursor-default",
});

const actionsheetScrollViewStyle = tva({
  base: "h-auto w-full",
});

const actionsheetVirtualizedListStyle = tva({
  base: "h-auto w-full",
});

const actionsheetFlatListStyle = tva({
  base: "h-auto w-full",
});

const actionsheetSectionListStyle = tva({
  base: "h-auto w-full",
});

const actionsheetSectionHeaderTextStyle = tva({
  base: "font-heading my-0 p-3 font-bold uppercase leading-5 text-typography-500",
  variants: {
    isTruncated: {
      true: "",
    },
    bold: {
      true: "font-bold",
    },
    underline: {
      true: "underline",
    },
    strikeThrough: {
      true: "line-through",
    },
    size: {
      "5xl": "text-5xl",
      "4xl": "text-4xl",
      "3xl": "text-3xl",
      "2xl": "text-2xl",
      xl: "text-xl",
      lg: "text-lg",
      md: "text-md",
      sm: "text-sm",
      xs: "text-xs",
    },

    sub: {
      true: "text-xs",
    },
    italic: {
      true: "italic",
    },
    highlight: {
      true: "bg-yellow500",
    },
  },
  defaultVariants: {
    size: "xs",
  },
});

const actionsheetIconStyle = tva({
  base: "text-typography-900",
  variants: {
    size: {
      "2xs": "h-3 w-3",
      xs: "h-3.5 w-3.5",
      sm: "h-4 w-4",
      md: "h-4 w-4",
      lg: "h-5 w-5",
      xl: "h-6 w-6",
    },
  },
});

type IActionsheetProps = VariantProps<typeof actionsheetStyle> &
  React.ComponentProps<typeof UIActionsheet> & { className?: string };

type IActionsheetContentProps = VariantProps<typeof actionsheetContentStyle> &
  React.ComponentProps<typeof UIActionsheet.Content> & { className?: string };

type IActionsheetItemProps = VariantProps<typeof actionsheetItemStyle> &
  React.ComponentProps<typeof UIActionsheet.Item> & { className?: string };

type IActionsheetItemTextProps = VariantProps<typeof actionsheetItemTextStyle> &
  React.ComponentProps<typeof UIActionsheet.ItemText> & { className?: string };

type IActionsheetDragIndicatorProps = VariantProps<
  typeof actionsheetDragIndicatorStyle
> &
  React.ComponentProps<typeof UIActionsheet.DragIndicator> & {
    className?: string;
  };

type IActionsheetDragIndicatorWrapperProps = VariantProps<
  typeof actionsheetDragIndicatorWrapperStyle
> &
  React.ComponentProps<typeof UIActionsheet.DragIndicatorWrapper> & {
    className?: string;
  };

type IActionsheetBackdropProps = VariantProps<typeof actionsheetBackdropStyle> &
  React.ComponentProps<typeof UIActionsheet.Backdrop> & {
    className?: string;
  };

type IActionsheetScrollViewProps = VariantProps<
  typeof actionsheetScrollViewStyle
> &
  React.ComponentProps<typeof UIActionsheet.ScrollView> & {
    className?: string;
  };

type IActionsheetVirtualizedListProps = VariantProps<
  typeof actionsheetVirtualizedListStyle
> &
  React.ComponentProps<typeof UIActionsheet.VirtualizedList> & {
    className?: string;
  };

type IActionsheetFlatListProps = VariantProps<typeof actionsheetFlatListStyle> &
  React.ComponentProps<typeof UIActionsheet.FlatList> & {
    className?: string;
  };

type IActionsheetSectionListProps = VariantProps<
  typeof actionsheetSectionListStyle
> &
  React.ComponentProps<typeof UIActionsheet.SectionList> & {
    className?: string;
  };

type IActionsheetSectionHeaderTextProps = VariantProps<
  typeof actionsheetSectionHeaderTextStyle
> &
  React.ComponentProps<typeof UIActionsheet.SectionHeaderText> & {
    className?: string;
  };

type IActionsheetIconProps = VariantProps<typeof actionsheetIconStyle> &
  React.ComponentProps<typeof UIActionsheet.Icon> & {
    className?: string;
  };

const Actionsheet = React.forwardRef<
  React.ElementRef<typeof UIActionsheet>,
  IActionsheetProps
>(({ className, ...props }, ref) => {
  return (
    <UIActionsheet
      className={actionsheetStyle({
        class: className,
      })}
      ref={ref}
      {...props}
    />
  );
});

const ActionsheetContent = React.forwardRef<
  React.ElementRef<typeof UIActionsheet.Content>,
  IActionsheetContentProps & { className?: string }
>(({ className, ...props }, ref) => {
  return (
    <UIActionsheet.Content
      className={actionsheetContentStyle({
        class: className,
      })}
      ref={ref}
      {...props}
    />
  );
});

const ActionsheetItem = React.forwardRef<
  React.ElementRef<typeof UIActionsheet.Item>,
  IActionsheetItemProps
>(({ className, ...props }, ref) => {
  return (
    <UIActionsheet.Item
      className={actionsheetItemStyle({
        class: className,
      })}
      ref={ref}
      {...props}
    />
  );
});

const ActionsheetItemText = React.forwardRef<
  React.ElementRef<typeof UIActionsheet.ItemText>,
  IActionsheetItemTextProps
>(
  (
    { isTruncated, bold, underline, strikeThrough, size, className, ...props },
    ref,
  ) => {
    return (
      <UIActionsheet.ItemText
        className={actionsheetItemTextStyle({
          class: className,
          isTruncated,
          bold,
          underline,
          strikeThrough,
          size,
        })}
        ref={ref}
        {...props}
      />
    );
  },
);

const ActionsheetDragIndicator = React.forwardRef<
  React.ElementRef<typeof UIActionsheet.DragIndicator>,
  IActionsheetDragIndicatorProps
>(({ className, ...props }, ref) => {
  return (
    <UIActionsheet.DragIndicator
      className={actionsheetDragIndicatorStyle({
        class: className,
      })}
      ref={ref}
      {...props}
    />
  );
});

const ActionsheetDragIndicatorWrapper = React.forwardRef<
  React.ElementRef<typeof UIActionsheet.DragIndicatorWrapper>,
  IActionsheetDragIndicatorWrapperProps
>(({ className, ...props }, ref) => {
  return (
    <UIActionsheet.DragIndicatorWrapper
      className={actionsheetDragIndicatorWrapperStyle({
        class: className,
      })}
      ref={ref}
      {...props}
    />
  );
});

const ActionsheetBackdrop = React.forwardRef<
  React.ElementRef<typeof UIActionsheet.Backdrop>,
  IActionsheetBackdropProps
>(({ className, ...props }, ref) => {
  return (
    <UIActionsheet.Backdrop
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 0.5,
      }}
      exit={{
        opacity: 0,
      }}
      {...props}
      className={actionsheetBackdropStyle({
        class: className,
      })}
      ref={ref}
    />
  );
});

const ActionsheetScrollView = React.forwardRef<
  React.ElementRef<typeof UIActionsheet.ScrollView>,
  IActionsheetScrollViewProps
>(({ className, ...props }, ref) => {
  return (
    <UIActionsheet.ScrollView
      className={actionsheetScrollViewStyle({
        class: className,
      })}
      ref={ref}
      {...props}
    />
  );
});

const ActionsheetVirtualizedList = React.forwardRef<
  React.ElementRef<typeof UIActionsheet.VirtualizedList>,
  IActionsheetVirtualizedListProps
>(({ className, ...props }, ref) => {
  return (
    <UIActionsheet.VirtualizedList
      className={actionsheetVirtualizedListStyle({
        class: className,
      })}
      ref={ref}
      {...props}
    />
  );
});

const ActionsheetFlatList = React.forwardRef<
  React.ElementRef<typeof UIActionsheet.FlatList>,
  IActionsheetFlatListProps
>(({ className, ...props }, ref) => {
  return (
    <UIActionsheet.FlatList
      className={actionsheetFlatListStyle({
        class: className,
      })}
      ref={ref}
      {...props}
    />
  );
});

const ActionsheetSectionList = React.forwardRef<
  React.ElementRef<typeof UIActionsheet.SectionList>,
  IActionsheetSectionListProps
>(({ className, ...props }, ref) => {
  return (
    <UIActionsheet.SectionList
      className={actionsheetSectionListStyle({
        class: className,
      })}
      ref={ref}
      {...props}
    />
  );
});

const ActionsheetSectionHeaderText = React.forwardRef<
  React.ElementRef<typeof UIActionsheet.SectionHeaderText>,
  IActionsheetSectionHeaderTextProps
>(
  (
    {
      className,
      isTruncated,
      bold,
      underline,
      strikeThrough,
      size,
      sub,
      italic,
      highlight,
      ...props
    },
    ref,
  ) => {
    return (
      <UIActionsheet.SectionHeaderText
        className={actionsheetSectionHeaderTextStyle({
          class: className,
          isTruncated,
          bold,
          underline,
          strikeThrough,
          size,
          sub,
          italic,
          highlight,
        })}
        ref={ref}
        {...props}
      />
    );
  },
);

const ActionsheetIcon = React.forwardRef<
  React.ElementRef<typeof UIActionsheet.Icon>,
  IActionsheetIconProps
>(({ className, as: AsComp, size = "sm", ...props }, ref) => {
  if (AsComp) {
    return (
      <AsComp
        className={actionsheetIconStyle({
          class: className,
          size,
        })}
        ref={ref}
        {...props}
      />
    );
  }
  return (
    <UIActionsheet.Icon
      className={actionsheetIconStyle({
        class: className,
        size,
      })}
      ref={ref}
      {...props}
    />
  );
});

export {
  Actionsheet,
  ActionsheetContent,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetBackdrop,
  ActionsheetScrollView,
  ActionsheetVirtualizedList,
  ActionsheetFlatList,
  ActionsheetSectionList,
  ActionsheetSectionHeaderText,
  ActionsheetIcon,
};