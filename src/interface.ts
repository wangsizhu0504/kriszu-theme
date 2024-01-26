export interface IVscodeJsonTheme {
  name?: string;
  settings?: IVscodeJsonThemeSetting[];
  tokenColors?: IVscodeJsonThemeSetting[];
  colors?: { [key: string]: string };
}

export interface IVscodeJsonThemeSetting {
  name: string;
  scope: string;
  settings: {
    foreground?: string
    fontStyle?: string
  };
}
export interface IBaseColorSet {
  /** The default background color */
  background: string;
  /** The default foreground color */
  foreground: string;
  color1: string;
  color2: string;
  color3: string;
  color4: string;
}
export interface IColorSet {
  type?: 'light' | 'dark';
  base: IBaseColorSet;
  syntax?: {
    boolean?: string;
    function?: string;
    functionCall?: string;
    identifier?: string;
    keyword?: string;
    number?: string;
    storage?: string;
    string?: string;
    stringEscape?: string;
    comment?: string;
    class?: string;
    classMember?: string;
    type?: string;
    modifier?: string;
    cssClass?: string;
    cssId?: string;
    cssTag?: string;
    markdownQuote?: string;
  };
  ui?: {
    /** The color of the editor cursor/caret */
    cursor?: string;
    /** Visible whitespace (editor.renderWhitespace) */
    invisibles?: string;
    /** Indent guide */
    guide?: string;
    /** Line highlight, this will remove the line borders in favor of a solid highlight */
    lineHighlight?: string;

    findMatchHighlight?: string;
    currentFindMatchHighlight?: string;
    findRangeHighlight?: string;
    /** Highlights the line(s) of the current find match, this also applies to things like find symbol */
    rangeHighlight?: string;
    /** Highlights strings that match the current selection, excluding the selection itself */
    selectionHighlight?: string;

    selection?: string;
    wordHighlight?: string;
    wordHighlightStrong?: string;
    activeLinkForeground?: string;
  };
  terminal?: {
    black?: string;
    red?: string;
    green?: string;
    yellow?: string;
    blue?: string;
    magenta?: string;
    cyan?: string;
    white?: string;
    brightBlack?: string;
    brightRed?: string;
    brightGreen?: string;
    brightYellow?: string;
    brightBlue?: string;
    brightMagenta?: string;
    brightCyan?: string;
    brightWhite?: string;
  };
  overrides?: { [key: string]: string };
}
export interface ContrastColors {
  /**
   * 活动元素周围的额外边框，用于与其他元素区分，增加对比度。
   */
  contrastActiveBorder: '',
  /**
   * 元素周围的额外边框，用于与其他元素区分，增加对比度。
   */
  contrastBorder: '',
}

export interface BaseColor {
  /**
   * 聚焦元素的整体边框颜色。如果没有被组件覆盖，则使用此颜色。
   */
  'focusBorder': string,
  /**
   * 整体前景色。如果没有被组件覆盖，则使用此颜色。
   */
  'foreground': string,
  /**
   * 禁用元素的整体前景色。如果没有被组件覆盖，则使用此颜色。
   */
  'disabledForeground': string,
  /**
   * 部件（例如编辑器内的查找/替换）的边框颜色。
   */
  'widget.border': string,
  /**
   * 部件（例如编辑器内的查找/替换）的阴影颜色。
   */
  'widget.shadow': string,
  /**
   * 工作台中文本选择的背景颜色（适用于输入字段或文本区域，不适用于编辑器和终端内的选择）。
   */
  'selection.background': string,
  /**
   * 描述文本的前景色，提供额外的信息，例如标签的描述。
   */
  'descriptionForeground': string,
  /**
   * 错误消息的整体前景色（如果没有被组件覆盖，则使用此颜色）。
   */
  'errorForeground': string,
  /**
   * 工作台中图标的默认颜色。
   */
  'icon.foreground': string,
  /**
   * 可拖动分割条的悬停边框颜色。
   */
  'sash.hoverBorder': string,
}

export interface WindowBorder {
  /**
   * 活动窗口的边框颜色。
   */
  'window.activeBorder': string;
  /**
   * 非活动窗口的边框颜色。
   */
  'window.inactiveBorder': string;
}

export interface TextColor {
  /**
   * 文本中引用块的背景颜色。
   */
  'textBlockQuote.background': string,
  /**
   * 文本中引用块的边框颜色。
   */
  'textBlockQuote.border': string,
  /**
   * 文本中代码块的背景颜色。
   */
  'textCodeBlock.background': string,
  /**
   * 链接在文本中被点击或悬停时的前景色。
   */
  'textLink.activeForeground': string,
  /**
   * 文本中链接的前景色。
   */
  'textLink.foreground': string,
  /**
   * 预格式化文本段的前景色。
   */
  'textPreformat.foreground': string,
  /**
   * 预格式化文本段的背景颜色。
   */
  'textPreformat.background': string,
  /**
   * 文本分隔符的颜色。
   */
  'textSeparator.foreground': string,
}

export interface ActionColor {
  /**
   *  鼠标悬停在工具栏操作上时的背景颜色。
   */
  'toolbar.hoverBackground': string,
  /**
   *  鼠标悬停在工具栏操作上时的轮廓颜色。
   */
  'toolbar.hoverOutline': string,
  /**
   *  鼠标按住工具栏操作时的背景颜色。
   */
  'toolbar.activeBackground': string,
}

export interface ButtonControl {
  /**
   *  按钮的背景颜色。
   */
  'button.background': string,
  /**
   *  按钮的前景颜色。
   */
  'button.foreground': string,
  /**
   *  按钮的边框颜色。
   */
  'button.border': string,
  /**
   *  按钮的分隔线颜色。
   */
  'button.separator': string,
  /**
   *  鼠标悬停在按钮上时的背景颜色。
   */
  'button.hoverBackground': string,
  /**
   *  次要按钮的前景颜色。
   */
  'button.secondaryForeground': string,
  /**
   *  次要按钮的背景颜色。
   */
  'button.secondaryBackground': string,
  /**
   *  鼠标悬停在次要按钮上时的背景颜色。
   */
  'button.secondaryHoverBackground': string,
  /**
   *  复选框部件的背景颜色。
   */
  'checkbox.background': string,
  /**
   *  复选框部件的前景颜色。
   */
  'checkbox.foreground': string,
  /**
   *  复选框部件的边框颜色。
   */
  'checkbox.border': string,
  /**
   *  当复选框所在的元素被选中时，复选框部件的背景颜色。
   */
  'checkbox.selectBackground': string,
  /**
   *  当复选框所在的元素被选中时，复选框部件的边框颜色。
   */
  'checkbox.selectBorder': string,
}

export interface DropdownControl {
  /**
   *  下拉菜单的背景颜色。
   */
  'dropdown.background': string,
  /**
   *  下拉菜单列表的背景颜色。
   */
  'dropdown.listBackground': string,
  /**
   *  下拉菜单的边框颜色。
   */
  'dropdown.border': string,
  /**
   *  下拉菜单的前景颜色。
   */
  'dropdown.foreground': string,
}

export interface InputControl {
  /**
   *  输入框的背景颜色。
   */
  'input.background': string,
  /**
   *  输入框的边框颜色。
   */
  'input.border': string,
  /**
   *  输入框的前景颜色。
   */
  'input.foreground': string,
  /**
   *  输入框占位符文本的前景色。
   */
  'input.placeholderForeground': string,
  /**
   *  输入字段中已激活选项的背景颜色。
   */
  'inputOption.activeBackground': string,
  /**
   *  输入字段中已激活选项的边框颜色。
   */
  'inputOption.activeBorder': string,
  /**
   *  输入字段中已激活选项的前景颜色。
   */
  'inputOption.activeForeground': string,
  /**
   *  输入字段中已激活选项的鼠标悬停背景色。
   */
  'inputOption.hoverBackground': string,
  /**
   *  错误严重性的输入验证背景颜色。
   */
  'inputValidation.errorBackground': string,
  /**
   *  错误严重性的输入验证前景颜色。
   */
  'inputValidation.errorForeground': string,
  /**
   *  错误严重性的输入验证边框颜色。
   */
  'inputValidation.errorBorder': string,
  /**
   *  信息严重性的输入验证背景颜色。
   */
  'inputValidation.infoBackground': string,
  /**
   *  信息严重性的输入验证前景颜色。
   */
  'inputValidation.infoForeground': string,
  /**
   *  信息严重性的输入验证边框颜色。
   */
  'inputValidation.infoBorder': string,
  /**
   *  警告严重性的输入验证背景颜色。
   */
  'inputValidation.warningBackground': string,
  /**
   *  警告严重性的输入验证前景颜色。
   */
  'inputValidation.warningForeground': string,
  /**
   *  警告严重性的输入验证边框颜色。
   */
  'inputValidation.warningBorder': string,
}
export interface ScrollbarControl {
/**
 *  滚动条滑块的阴影，用于指示滚动视图。
 */
  'scrollbar.shadow': string,
  /**
   *  点击时滚动条滑块的背景颜色。
   */
  'scrollbarSlider.activeBackground': string,
  /**
   *  滚动条滑块的背景颜色。
   */
  'scrollbarSlider.background': string,
  /**
   *  鼠标悬停时滚动条滑块的背景颜色。
   */
  'scrollbarSlider.hoverBackground': string,
}

export interface Badge {
  /**
   *  徽章的前景颜色。
   */
  'badge.foreground': string,
  /**
   *  徽章的背景颜色。
   */
  'badge.background': string,
}

export interface ProgressBar {
  /**
   *  长时间运行操作时显示的进度条的背景颜色。
   */
  'progressBar.background': string,
}

export interface ListsAndTrees {
  /**
   *  当列表/树处于活动状态时，所选项的背景颜色。
   */
  'list.activeSelectionBackground': string,
  /**
   *  当列表/树处于活动状态时，所选项的前景颜色。
   */
  'list.activeSelectionForeground': string,
  /**
   *  当列表/树处于活动状态时，所选项的图标前景颜色。活动的列表/树具有键盘焦点，非活动的列表/树没有。
   */
  'list.activeSelectionIconForeground': string,
  /**
   *  使用鼠标移动项目时，列表/树的拖放背景。
   */
  'list.dropBackground': string,
  /**
   *  当列表/树处于活动状态时，聚焦项的背景颜色。
   */
  'list.focusBackground': string,
  /**
   *  当列表/树处于活动状态时，聚焦项的前景颜色。活动的列表/树具有键盘焦点，非活动的列表/树没有。
   */
  'list.focusForeground': string,
  /**
   *  在列表/树内搜索时，活动聚焦项上匹配高亮的前景颜色。
   */
  'list.focusHighlightForeground': string,
  /**
   *  当列表/树处于活动状态时，聚焦项的轮廓颜色。活动的列表/树具有键盘焦点，非活动的列表/树没有。
   */
  'list.focusOutline': string,
  /**
   *  当列表/树处于活动状态且已选中时，聚焦项的轮廓颜色。活动的列表/树具有键盘焦点，非活动的列表/树没有。
   */
  'list.focusAndSelectionOutline': string,
  /**
   *  在列表/树内搜索时，匹配项的前景颜色高亮。
   */
  'list.highlightForeground': string,
  /**
   *  使用鼠标悬停在项目上时，列表/树的背景。
   */
  'list.hoverBackground': string,
  /**
   *  使用鼠标悬停在项目上时，列表/树的前景。
   */
  'list.hoverForeground': string,
  /**
   *  当列表/树处于非活动状态时，所选项的背景颜色。
   */
  'list.inactiveSelectionBackground': string,
  /**
   *  当列表/树处于非活动状态时，所选项的前景颜色。活动的列表/树具有键盘焦点，非活动的列表/树没有。
   */
  'list.inactiveSelectionForeground': string,
  /**
   *  当列表/树处于非活动状态时，所选项的图标前景颜色。活动的列表/树具有键盘焦点，非活动的列表/树没有。
   */
  'list.inactiveSelectionIconForeground': string,
  /**
   *  当列表处于非活动状态时，聚焦项的背景颜色。活动的列表具有键盘焦点，非活动的列表没有。目前仅支持列表。
   */
  'list.inactiveFocusBackground': string,
  /**
   *  当列表/树处于非活动状态时，聚焦项的轮廓颜色。活动的列表/树具有键盘焦点，非活动的列表/树没有。
   */
  'list.inactiveFocusOutline': string,
  /**
   *  无效项的列表/树前景颜色，例如资源管理器中的未解析的根目录。
   */
  'list.invalidItemForeground': string,
  /**
   *  列表项中包含错误的前景颜色。
   */
  'list.errorForeground': string,
  /**
   *  列表项中包含警告的前景颜色。
   */
  'list.warningForeground': string,
  /**
   *  在列表/树内搜索时，类型过滤器的背景颜色。
   */
  'listFilterWidget.background': string,
  /**
   *  在列表/树内搜索时，类型过滤器的轮廓颜色。
   */
  'listFilterWidget.outline': string,
  /**
   *  在列表/树内搜索时，未找到匹配项的类型过滤器的轮廓颜色。
   */
  'listFilterWidget.noMatchesOutline': string,
  /**
   *  当列表/树内搜索时，类型过滤器的阴影颜色。
   */
  'listFilterWidget.shadow': string,
  /**
   *  在列表/树中过滤的匹配项的背景颜色。
   */
  'list.filterMatchBackground': string,
  /**
   *  在列表/树中过滤的匹配项的边框颜色。
   */
  'list.filterMatchBorder': string,
  /**
   *  对于被弱化的列表/树项，列表/树的前景颜色。
   */
  'list.deemphasizedForeground': string,
  /**
   *  树小部件的缩进指南线条颜色。
   */
  'tree.indentGuidesStroke': string,
  /**
   *  对于非活动的缩进指南，树的缩进指南线条颜色。
   */
  'tree.inactiveIndentGuidesStroke': string,
  /**
   *  树的缩进指南线条颜色。
   */
  'tree.tableColumnsBorder': string,
  /**
   *  奇数行的表格背景颜色。
   */
  'tree.tableOddRowsBackground': string,
}
export interface ActivityBar {
  /**
   *  活动栏的背景颜色。
   */
  'activityBar.background': string,
  /**
   *  活动栏项的拖放反馈颜色。活动栏显示在最左侧或最右侧，用于在侧边栏的视图之间进行切换。
   */
  'activityBar.dropBorder': string,
  /**
   *  活动栏的前景颜色（例如用于图标）。
   */
  'activityBar.foreground': string,
  /**
   *  当活动栏项处于非活动状态时，活动栏项的前景颜色。
   */
  'activityBar.inactiveForeground': string,
  /**
   *  活动栏与侧边栏之间的边框颜色。
   */
  'activityBar.border': string,
  /**
   *  活动通知徽章的背景颜色。
   */
  'activityBarBadge.background': string,
  /**
   *  活动通知徽章的前景颜色。
   */
  'activityBarBadge.foreground': string,
  /**
   *  活动栏活动指示器的边框颜色。
   */
  'activityBar.activeBorder': string,
  /**
   *  活动元素的背景颜色。
   */
  'activityBar.activeBackground': string,
  /**
   *  活动栏焦点边框颜色，用于活动项。
   */
  'activityBar.activeFocusBorder': string,
}
export interface Profiles {
  /**
   *  配置徽章的背景颜色。配置徽章显示在活动栏中的设置齿轮图标顶部。
   */
  'profileBadge.background': string,
  /**
   *  配置徽章的前景颜色。配置徽章显示在活动栏中的设置齿轮图标顶部。
   */
  'profileBadge.foreground': string,
}
export interface SideBar {
  /**
   *  侧边栏的背景颜色。
   */
  'sideBar.background': string,
  /**
   *  侧边栏的前景颜色。侧边栏是包含资源管理器和搜索等视图的容器。
   */
  'sideBar.foreground': string,
  /**
   *  侧边栏与编辑器之间的边框颜色。
   */
  'sideBar.border': string,
  /**
   *  侧边栏部分的拖放反馈颜色。颜色应该有透明度，以便侧边栏部分仍然可以透出来。
   */
  'sideBar.dropBackground': string,
  /**
   *  侧边栏标题的前景颜色。
   */
  'sideBarTitle.foreground': string,
  /**
   *  侧边栏部分标题的背景颜色。
   */
  'sideBarSectionHeader.background': string,
  /**
   *  侧边栏部分标题的前景颜色。
   */
  'sideBarSectionHeader.foreground': string,
  /**
   *  侧边栏部分标题的边框颜色。
   */
  'sideBarSectionHeader.border': string,
}

export interface Minimap {
  /**
   *  在文件中搜索的匹配项的高亮颜色。
   */
  'minimap.findMatchHighlight': string,
  /**
   *  编辑器选择的高亮颜色。
   */
  'minimap.selectionHighlight': string,
  /**
   *  编辑器内错误的高亮颜色。
   */
  'minimap.errorHighlight': string,
  /**
   *  编辑器内警告的高亮颜色。
   */
  'minimap.warningHighlight': string,
  /**
   *  迷你地图的背景颜色。
   */
  'minimap.background': string,
  /**
   *  重复的编辑器选择的迷你地图标记颜色。
   */
  'minimap.selectionOccurrenceHighlight': string,
  /**
   *  在迷你地图中呈现的前景元素的不透明度。例如，"#000000c0"将以75%的不透明度呈现元素。
   */
  'minimap.foregroundOpacity': string,
  /**
   *  迷你地图中用于信息的标记颜色。
   */
  'minimap.infoHighlight': string,

  /**
   *  迷你地图滑块的背景颜色。
   */
  'minimapSlider.background': string,
  /**
   *  当悬停时，迷你地图滑块的背景颜色。
   */
  'minimapSlider.hoverBackground': string,
  /**
   *  点击时，迷你地图滑块的背景颜色。
   */
  'minimapSlider.activeBackground': string,

  /**
   *  添加内容的迷你地图边栏颜色。
   */
  'minimapGutter.addedBackground': string,
  /**
   *  修改内容的迷你地图边栏颜色。
   */
  'minimapGutter.modifiedBackground': string,
  /**
   *  删除内容的迷你地图边栏颜色。
   */
  'minimapGutter.deletedBackground': string,
}

export interface EditGroupsAndTabs {
  /**
   *  拖动编辑器时的背景颜色。
   */
  'editorGroup.dropBackground': string,
  /**
   *  分隔多个编辑器组的颜色。
   */
  'editorGroup.border': string,
  /**
   *  使用单个选项卡时，编辑器组标题头的背景颜色（设置为 `"workbench.editor.showTabs": "single"`）。
   */
  'editorGroupHeader.noTabsBackground': string,
  /**
   *  标签容器的背景颜色。
   */
  'editorGroupHeader.tabsBackground': string,
  /**
   *  启用选项卡时，在编辑器选项卡控件下方的边框颜色。
   */
  'editorGroupHeader.tabsBorder': string,
  /**
   *  编辑器组标题头和编辑器之间的边框颜色（如果启用面包屑，则在面包屑下方）。
   */
  'editorGroupHeader.border': string,
  /**
   *  空编辑器组的背景颜色。
   */
  'editorGroup.emptyBackground': string,
  /**
   *  聚焦的空编辑器组的边框颜色。
   */
  'editorGroup.focusedEmptyBorder': string,
  /**
   *  拖动文件时在编辑器上方显示的文本的前景颜色。此文本通知用户他们可以按住 Shift 键将文件拖放到编辑器中。
   */
  'editorGroup.dropIntoPromptForeground': string,
  /**
   *  拖动文件时在编辑器上方显示的文本的背景颜色。此文本通知用户他们可以按住 Shift 键将文件拖放到编辑器中。
   */
  'editorGroup.dropIntoPromptBackground': string,
  /**
   *  拖动文件时在编辑器上方显示的文本的边框颜色。此文本通知用户他们可以按住 Shift 键将文件拖放到编辑器中。
   */
  'editorGroup.dropIntoPromptBorder': string,
  /**
   *  活动组中活动标签的背景颜色。
   */
  'tab.activeBackground': string,
  /**
   *  非活动编辑器组中活动标签的背景颜色。
   */
  'tab.unfocusedActiveBackground': string,
  /**
   *  活动组中活动标签的前景颜色。
   */
  'tab.activeForeground': string,
  /**
   *  用于分隔选项卡的边框。
   */
  'tab.border': string,
  /**
   *  活动选项卡的底部边框。
   */
  'tab.activeBorder': string,
  /**
   *  非活动编辑器组中活动选项卡的底部边框。
   */
  'tab.unfocusedActiveBorder': string,
  /**
   *  活动选项卡的顶部边框。
   */
  'tab.activeBorderTop': string,
  /**
   *  非活动编辑器组中活动选项卡的顶部边框。
   */
  'tab.unfocusedActiveBorderTop': string,
  /**
   *  用于分隔最后一个固定编辑器与非固定编辑器的右侧边框。
   */
  'tab.lastPinnedBorder': string,
  /**
   *  非活动选项卡的背景颜色。
   */
  'tab.inactiveBackground': string,
  /**
   *  非活动编辑器组中非活动选项卡的背景颜色。
   */
  'tab.unfocusedInactiveBackground': string,
  /**
   *  活动组中非活动选项卡的前景颜色。
   */
  'tab.inactiveForeground': string,
  /**
   *  非活动编辑器组中活动选项卡的前景颜色。
   */
  'tab.unfocusedActiveForeground': string,
  /**
   *  非活动编辑器组中非活动选项卡的前景颜色。
   */
  'tab.unfocusedInactiveForeground': string,
  /**
   *  悬停时的选项卡背景颜色。
   */
  'tab.hoverBackground': string,
  /**
   *  非活动编辑器组中悬停时的选项卡背景颜色。
   */
  'tab.unfocusedHoverBackground': string,
  /**
   *  悬停时的选项卡前景颜色。
   */
  'tab.hoverForeground': string,
  /**
   *  非活动编辑器组中悬停时的选项卡前景颜色。
   */
  'tab.unfocusedHoverForeground': string,
  /**
   *  悬停时用于突出显示选项卡的边框。
   */
  'tab.hoverBorder': string,
  /**
   *  非活动编辑器组中悬停时用于突出显示选项卡的边框。
   */
  'tab.unfocusedHoverBorder': string,
  /**
   *  活动组中已修改（脏）活动选项卡顶部的边框。
   */
  'tab.activeModifiedBorder': string,
  /**
   *  活动组中已修改（脏）非活动选项卡顶部的边框。
   */
  'tab.inactiveModifiedBorder': string,
  /**
   *  非活动编辑器组中已修改（脏）活动选项卡顶部的边框。
   */
  'tab.unfocusedActiveModifiedBorder': string,
  /**
   *  非活动编辑器组中已修改（脏）非活动选项卡顶部的边框。
   */
  'tab.unfocusedInactiveModifiedBorder': string,
  /**
   *  在编辑器布局的左侧和右侧可见的编辑器窗格的背景颜色。
   */
  'editorPane.background': string,
  /**
   *  当在编辑器组中水平排列时，用于将两个编辑器从上到下分开的颜色。
   */
  'sideBySideEditor.horizontalBorder': string,
  /**
   *  当在编辑器组中水平排列时，用于将两个编辑器从左到右分开的颜色。
   */
  'sideBySideEditor.verticalBorder': string,
}
export interface EditorColors {
  /**
   *  编辑器的背景颜色。
   */
  'editor.background': string,
  /**
   *  编辑器的默认前景色。
   */
  'editor.foreground': string,
  /**
   *  编辑器行号的颜色。
   */
  'editorLineNumber.foreground': string,
  /**
   *  活动编辑器行号的颜色。
   */
  'editorLineNumber.activeForeground': string,
  /**
   *  当 editor.renderFinalNewline 设置为 dimmed 时，编辑器最后一行的颜色。
   */
  'editorLineNumber.dimmedForeground': string,
  /**
   *  编辑器光标的背景颜色。允许自定义块光标重叠的字符的颜色。
   */
  'editorCursor.background': string,
  /**
   *  编辑器光标的颜色。
   */
  'editorCursor.foreground': string,
  /**
   *  编辑器选区的颜色。
   */
  'editor.selectionBackground': string,
  /**
   *  高对比度下所选文本的颜色。
   */
  'editor.selectionForeground': string,
  /**
   *  非活动编辑器中选择的背景颜色。颜色不能是不透明的，以免隐藏底层装饰。
   */
  'editor.inactiveSelectionBackground': string,
  /**
   *  与所选内容相同的区域的颜色。颜色不能是不透明的，以免隐藏底层装饰。
   */
  'editor.selectionHighlightBackground': string,
  /**
   *  与所选内容相同的区域的边框颜色。
   */
  'editor.selectionHighlightBorder': string,

  /**
   *  在读取访问期间符号的背景颜色，例如读取变量。颜色不能是不透明的，以免隐藏底层装饰。
   */
  'editor.wordHighlightBackground': string,
  /**
   *  在读取访问期间符号的边框颜色，例如读取变量。
   */
  'editor.wordHighlightBorder': string,
  /**
   *  在写入访问期间符号的背景颜色，例如写入变量。颜色不能是不透明的，以免隐藏底层装饰。
   */
  'editor.wordHighlightStrongBackground': string,
  /**
   *  在写入访问期间符号的边框颜色，例如写入变量。
   */
  'editor.wordHighlightStrongBorder': string,
  /**
   *  文本出现的符号的背景颜色。颜色不能是不透明的，以免隐藏底层装饰。
   */
  'editor.wordHighlightTextBackground': string,
  /**
   *  文本出现的符号的边框颜色。
   */
  'editor.wordHighlightTextBorder': string,

  /* Find matches */
  /**
   *  当前搜索匹配项的颜色。
   */
  'editor.findMatchBackground': string,
  /**
   *  其他搜索匹配项的颜色。颜色不能是不透明的，以免隐藏底层装饰。
   */
  'editor.findMatchHighlightBackground': string,
  /**
   *  限制搜索范围的颜色（在查找小部件中启用“在选择中查找”）。颜色不能是不透明的，以免隐藏底层装饰。
   */
  'editor.findRangeHighlightBackground': string,
  /**
   *  当前搜索匹配项的边框颜色。
   */
  'editor.findMatchBorder': string,
  /**
   *  其他搜索匹配项的边框颜色。
   */
  'editor.findMatchHighlightBorder': string,
  /**
   *  限制搜索范围的边框颜色（在查找小部件中启用“在选择中查找”）。
   */
  'editor.findRangeHighlightBorder': string,

  /* Search Results */
  /**
   *  搜索视图中完成消息的文本颜色。例如，此颜色用于显示“{x} 个结果在 {y} 个文件中”的文本。
   */
  'search.resultsInfoForeground': string,

  /* Search Editor Matches */
  /**
   *  搜索编辑器结果的背景颜色。
   */
  'searchEditor.findMatchBackground': string,
  /**
   *  搜索编辑器结果的边框颜色。
   */
  'searchEditor.findMatchBorder': string,
  /**
   *  搜索编辑器文本输入框的边框颜色。
   */
  'searchEditor.textInputBorder': string,

  /* Hover Highlight */
  /**
   *  鼠标悬停时显示的单词下方的高亮颜色。颜色不能是不透明的，以免隐藏底层装饰。
   */
  'editor.hoverHighlightBackground': string,

  /* Line Highlight */
  /**
   *  光标位置所在行的高亮背景颜色。
   */
  'editor.lineHighlightBackground': string,
  /**
   *  光标位置所在行周围边框的背景颜色。
   */
  'editor.lineHighlightBorder': string,

  /**
   *  用于突出显示 Unicode 字符的边框颜色。
   */
  'editorUnicodeHighlight.border': string,
  /**
   *  用于突出显示 Unicode 字符的背景颜色。
   */
  'editorUnicodeHighlight.background': string,

  /**
   *  活动链接的颜色。
   */
  'editorLink.activeForeground': string,
  /**
   *  高亮范围的背景颜色，用于快速打开、文件中的符号和查找功能。颜色不能是不透明的，以免隐藏底层装饰。
   */
  'editor.rangeHighlightBackground': string,
  /**
   *  高亮范围周围边框的背景颜色。
   */
  'editor.rangeHighlightBorder': string,

  /**
   *  高亮符号的背景颜色。颜色不能是不透明的，以免隐藏底层装饰。
   */
  'editor.symbolHighlightBackground': string,
  /**
   *  高亮符号周围边框的背景颜色。
   */
  'editor.symbolHighlightBorder': string,
  /**
   *  编辑器中空白字符的颜色。
   */
  'editorWhitespace.foreground': string,

  /**
   *  编辑器缩进指南的颜色。
   */
  'editorIndentGuide.background': string,
  /**
   *  编辑器缩进指南的颜色 (1)。
   */
  'editorIndentGuide.background1': string,
  /**
   *  编辑器缩进指南的颜色 (2)。
   */
  'editorIndentGuide.background2': string,
  /**
   *  编辑器缩进指南的颜色 (3)。
   */
  'editorIndentGuide.background3': string,
  /**
   *  编辑器缩进指南的颜色 (4)。
   */
  'editorIndentGuide.background4': string,
  /**
   *  编辑器缩进指南的颜色 (5)。
   */
  'editorIndentGuide.background5': string,
  /**
   *  编辑器缩进指南的颜色 (6)。
   */
  'editorIndentGuide.background6': string,
  /**
   *  活动编辑器缩进指南的颜色。
   */
  'editorIndentGuide.activeBackground': string,
  /**
   *  活动编辑器缩进指南的颜色 (1)。
   */
  'editorIndentGuide.activeBackground1': string,
  /**
   *  活动编辑器缩进指南的颜色 (2)。
   */
  'editorIndentGuide.activeBackground2': string,
  /**
   *  活动编辑器缩进指南的颜色 (3)。
   */
  'editorIndentGuide.activeBackground3': string,
  /**
   *  活动编辑器缩进指南的颜色 (4)。
   */
  'editorIndentGuide.activeBackground4': string,
  /**
   *  活动编辑器缩进指南的颜色 (5)。
   */
  'editorIndentGuide.activeBackground5': string,
  /**
   *  活动编辑器缩进指南的颜色 (6)。
   */
  'editorIndentGuide.activeBackground6': string,

  /**
   *  内联提示的背景颜色。
   */
  'editorInlayHint.background': string,
  /**
   *  内联提示的前景颜色。
   */
  'editorInlayHint.foreground': string,
  /**
   *  类型内联提示的前景颜色。
   */
  'editorInlayHint.typeForeground': string,
  /**
   *  类型内联提示的背景颜色。
   */
  'editorInlayHint.typeBackground': string,
  /**
   *  参数内联提示的前景颜色。
   */
  'editorInlayHint.parameterForeground': string,
  /**
   *  参数内联提示的背景颜色。
   */
  'editorInlayHint.parameterBackground': string,

  /**
   *  编辑器标尺的颜色。
   */
  'editorRuler.foreground': string,
  /**
   *  编辑器处于链接编辑模式时的背景颜色。
   */
  'editor.linkedEditingBackground': string,

  /**
   *  编辑器 CodeLens 的前景颜色。
   */
  'editorCodeLens.foreground': string,
  /**
   *  用于灯泡操作图标的颜色。
   */
  'editorLightBulb.foreground': string,
  /**
   *  用于灯泡自动修复操作图标的颜色。
   */
  'editorLightBulbAutoFix.foreground': string,
  /**
   *  用于灯泡 AI 图标的颜色。
   */
  'editorLightBulbAi.foreground': string,

  /**
   *  匹配括号后面的背景颜色。
   */
  'editorBracketMatch.background': string,
  /**
   *  匹配括号框的颜色。
   */
  'editorBracketMatch.border': string,

  /**
   *  括号（1）的前景颜色。需要启用括号对颜色标记。
   */
  'editorBracketHighlight.foreground1': string,
  /**
   *  括号（2）的前景颜色。需要启用括号对颜色标记。
   */
  'editorBracketHighlight.foreground2': string,
  /**
   *  括号（3）的前景颜色。需要启用括号对颜色标记。
   */
  'editorBracketHighlight.foreground3': string,
  /**
   *  括号（4）的前景颜色。需要启用括号对颜色标记。
   */
  'editorBracketHighlight.foreground4': string,
  /**
   *  括号（5）的前景颜色。需要启用括号对颜色标记。
   */
  'editorBracketHighlight.foreground5': string,
  /**
   *  括号（6）的前景颜色。需要启用括号对颜色标记。
   */
  'editorBracketHighlight.foreground6': string,
  /**
   *  未预期的括号的前景颜色。
   */
  'editorBracketHighlight.unexpectedBracket.foreground': string,

  /**
   *  活动括号对指南的背景颜色 (1)。需要启用括号对指南。
   */
  'editorBracketPairGuide.activeBackground1': string,
  /**
   *  活动括号对指南的背景颜色 (2)。需要启用括号对指南。
   */
  'editorBracketPairGuide.activeBackground2': string,
  /**
   *  活动括号对指南的背景颜色 (3)。需要启用括号对指南。
   */
  'editorBracketPairGuide.activeBackground3': string,
  /**
   *  活动括号对指南的背景颜色 (4)。需要启用括号对指南。
   */
  'editorBracketPairGuide.activeBackground4': string,
  /**
   *  活动括号对指南的背景颜色 (5)。需要启用括号对指南。
   */
  'editorBracketPairGuide.activeBackground5': string,
  /**
   *  活动括号对指南的背景颜色 (6)。需要启用括号对指南。
   */
  'editorBracketPairGuide.activeBackground6': string,
  /**
   *  非活动括号对指南的背景颜色 (1)。需要启用括号对指南。
   */
  'editorBracketPairGuide.background1': string,
  /**
   *  非活动括号对指南的背景颜色 (2)。需要启用括号对指南。
   */
  'editorBracketPairGuide.background2': string,
  /**
   *  非活动括号对指南的背景颜色 (3)。需要启用括号对指南。
   */
  'editorBracketPairGuide.background3': string,
  /**
   *  非活动括号对指南的背景颜色 (4)。需要启用括号对指南。
   */
  'editorBracketPairGuide.background4': string,
  /**
   *  非活动括号对指南的背景颜色 (5)。需要启用括号对指南。
   */
  'editorBracketPairGuide.background5': string,
  /**
   *  非活动括号对指南的背景颜色 (6)。需要启用括号对指南。
   */
  'editorBracketPairGuide.background6': string,

  /**
   *  折叠区域的背景颜色。颜色不能是不透明的，以免隐藏底层装饰。
   */
  'editor.foldBackground': string,

  /**
   *  编辑器概览标尺的背景颜色。仅在启用缩略图并将其放置在编辑器右侧时使用。
   */
  'editorOverviewRuler.background': string,
  /**
   *  概览标尺边框的颜色。
   */
  'editorOverviewRuler.border': string,
  /**
   *  查找匹配项的概览标尺标记颜色。颜色不能是不透明的，以免隐藏底层装饰。
   */
  'editorOverviewRuler.findMatchForeground': string,
  /**
   *  被突出显示的范围的概览标尺标记颜色，例如快速打开、文件中的符号和查找功能。颜色不能是不透明的，以免隐藏底层装饰。
   */
  'editorOverviewRuler.rangeHighlightForeground': string,
  /**
   *  选择突出显示的概览标尺标记颜色。颜色不能是不透明的，以免隐藏底层装饰。
   */
  'editorOverviewRuler.selectionHighlightForeground': string,
  /**
   *  符号突出显示的概览标尺标记颜色。颜色不能是不透明的，以免隐藏底层装饰。
   */
  'editorOverviewRuler.wordHighlightForeground': string,
  /**
   *  写访问符号突出显示的概览标尺标记颜色。颜色不能是不透明的，以免隐藏底层装饰。
   */
  'editorOverviewRuler.wordHighlightStrongForeground': string,
  /**
   *  文本出现的概览标尺标记颜色。颜色不能是不透明的，以免隐藏底层装饰。
   */
  'editorOverviewRuler.wordHighlightTextForeground': string,
  /**
   *  修改内容的概览标尺标记颜色。
   */
  'editorOverviewRuler.modifiedForeground': string,
  /**
   *  添加的内容的概览标尺标记颜色。
   */
  'editorOverviewRuler.addedForeground': string,
  /**
   *  删除的内容的概览标尺标记颜色。
   */
  'editorOverviewRuler.deletedForeground': string,
  /**
   *  错误的概览标尺标记颜色。
   */
  'editorOverviewRuler.errorForeground': string,
  /**
   *  警告的概览标尺标记颜色。
   */
  'editorOverviewRuler.warningForeground': string,
  /**
   *  信息的概览标尺标记颜色。
   */
  'editorOverviewRuler.infoForeground': string,
  /**
   *  匹配括号的概览标尺标记颜色。
   */
  'editorOverviewRuler.bracketMatchForeground': string,

  /**
   *  编辑器中错误下划线的前景色。
   */
  'editorError.foreground': string,
  /**
   *  编辑器中错误框的边框颜色。
   */
  'editorError.border': string,
  /**
   *  编辑器中错误文本的背景颜色。颜色不能是不透明的，以免隐藏底层装饰。
   */
  'editorError.background': string,
  /**
   *  编辑器中警告下划线的前景色。
   */
  'editorWarning.foreground': string,
  /**
   *  编辑器中警告框的边框颜色。
   */
  'editorWarning.border': string,
  /**
   *  编辑器中警告文本的背景颜色。颜色不能是不透明的，以免隐藏底层装饰。
   */
  'editorWarning.background': string,
  /**
   *  编辑器中信息下划线的前景色。
   */
  'editorInfo.foreground': string,
  /**
   *  编辑器中信息框的边框颜色。
   */
  'editorInfo.border': string,
  /**
   *  编辑器中信息文本的背景颜色。颜色不能是不透明的，以免隐藏底层装饰。
   */
  'editorInfo.background': string,
  /**
   *  编辑器中提示的前景色。
   */
  'editorHint.foreground': string,
  /**
   *  编辑器中提示框的边框颜色。
   */
  'editorHint.border': string,
  /**
   *  问题错误图标的颜色。
   */
  'problemsErrorIcon.foreground': string,
  /**
   *  问题警告图标的颜色。
   */
  'problemsWarningIcon.foreground': string,
  /**
   *  问题信息图标的颜色。
   */
  'problemsInfoIcon.foreground': string,

  /**
   *  不必要（未使用）源代码的边框颜色。
   */
  'editorUnnecessaryCode.border': string,
  /**
   *  不必要（未使用）源代码的不透明度。例如，"#000000c0" 将以75%的不透明度渲染代码。对于高对比度主题，请使用 "editorUnnecessaryCode.border" 主题颜色来下划线不必要的代码，而不是使其变暗。
   */
  'editorUnnecessaryCode.opacity': string,
  /**
   *  编辑器装订线的背景颜色。装订线包含了行号和行号外边距。
   */
  'editorGutter.background': string,
  /**
   *  修改的行的编辑器装订线背景颜色。
   */
  'editorGutter.modifiedBackground': string,
  /**
   *  添加的行的编辑器装订线背景颜色。
   */
  'editorGutter.addedBackground': string,
  /**
   *  删除的行的编辑器装订线背景颜色。
   */
  'editorGutter.deletedBackground': string,
  /**
   *  用于注释范围的编辑器装订线装饰颜色。
   */
  'editorGutter.commentRangeForeground': string,
  /**
   *  用于注释标记的编辑器装订线装饰颜色。
   */
  'editorGutter.commentGlyphForeground': string,
  /**
   *  用于未解决注释线程的注释标记的编辑器装订线装饰颜色。
   */
  'editorGutter.commentUnresolvedGlyphForeground': string,
  /**
   *  编辑器装订线中折叠控件的颜色。
   */
  'editorGutter.foldingControlForeground': string,

  /**
   *  已解决评论的边框颜色和箭头颜色。
   */
  'editorCommentsWidget.resolvedBorder': string,
  /**
   *  未解决评论的边框颜色和箭头颜色。
   */
  'editorCommentsWidget.unresolvedBorder': string,
  /**
   *  评论范围的背景颜色。
   */
  'editorCommentsWidget.rangeBackground': string,
  /**
   *  当前选择或悬停的评论范围的背景颜色。
   */
  'editorCommentsWidget.rangeActiveBackground': string,
  /**
   *  评论回复输入框的背景颜色。
   */
  'editorCommentsWidget.replyInputBackground': string,
}
export interface DiffEditorColors {
  /**
   *  插入的文本的背景颜色。颜色不能是不透明的，以免隐藏底层装饰。
   */
  'diffEditor.insertedTextBackground': string,
  /**
   *  插入的文本的轮廓颜色。
   */
  'diffEditor.insertedTextBorder': string,
  /**
   *  删除的文本的背景颜色。颜色不能是不透明的，以免隐藏底层装饰。
   */
  'diffEditor.removedTextBackground': string,
  /**
   *  删除的文本的轮廓颜色。
   */
  'diffEditor.removedTextBorder': string,
  /**
   *  两个文本编辑器之间的边框颜色。
   */
  'diffEditor.border': string,
  /**
   *  差异编辑器的对角线填充颜色。对角线填充用于并排差异视图。
   */
  'diffEditor.diagonalFill': string,
  /**
   *  插入的行的背景颜色。颜色不能是不透明的，以免隐藏底层装饰。
   */
  'diffEditor.insertedLineBackground': string,
  /**
   *  删除的行的背景颜色。颜色不能是不透明的，以免隐藏底层装饰。
   */
  'diffEditor.removedLineBackground': string,
  /**
   *  插入行的边距背景颜色。
   */
  'diffEditorGutter.insertedLineBackground': string,
  /**
   *  删除行的边距背景颜色。
   */
  'diffEditorGutter.removedLineBackground': string,
  /**
   *  差异概览标尺中插入内容的颜色。
   */
  'diffEditorOverview.insertedForeground': string,
  /**
   *  差异概览标尺中删除内容的颜色。
   */
  'diffEditorOverview.removedForeground': string,
  /**
   *  差异编辑器中未更改块的颜色。
   */
  'diffEditor.unchangedRegionBackground': string,
  /**
   *  差异编辑器中未更改块的前景色。
   */
  'diffEditor.unchangedRegionForeground': string,
  /**
   *  差异编辑器中未更改区域小部件周围的阴影颜色。
   */
  'diffEditor.unchangedRegionShadow': string,
  /**
   *  差异编辑器中未更改代码的背景颜色。
   */
  'diffEditor.unchangedCodeBackground': string,
  /**
   *  差异编辑器中移动的文本的边框颜色。
   */
  'diffEditor.move.border': string,
  /**
   *  差异编辑器中移动的文本的活动边框颜色。
   */
  'diffEditor.moveActive.border': string,
  /**
   *  多重差异编辑器的标题背景颜色。
   */
  'multiDiffEditor.headerBackground': string,
}
export interface EditorWidgetColors {
  /**
   *  编辑器小部件（例如查找/替换）的前景色。
   */
  'editorWidget.foreground': string,
  /**
   *  编辑器小部件（例如查找/替换）的背景颜色。
   */
  'editorWidget.background': string,
  /**
   *  编辑器小部件（除非小部件不包含边框或定义自己的边框颜色）的边框颜色。
   */
  'editorWidget.border': string,
  /**
   *  编辑器小部件调整大小边框的颜色。仅当小部件选择具有调整大小边框并且颜色未被小部件覆盖时，才使用此颜色。
   */
  'editorWidget.resizeBorder': string,

  /**
   *  建议小部件的背景颜色。
   */
  'editorSuggestWidget.background': string,
  /**
   *  建议小部件的边框颜色。
   */
  'editorSuggestWidget.border': string,
  /**
   *  建议小部件的前景色。
   */
  'editorSuggestWidget.foreground': string,
  /**
   *  当建议项被聚焦时，建议小部件中匹配高亮的颜色。
   */
  'editorSuggestWidget.focusHighlightForeground': string,
  /**
   *  建议小部件中匹配高亮的颜色。
   */
  'editorSuggestWidget.highlightForeground': string,
  /**
   *  建议小部件中选定条目的背景颜色。
   */
  'editorSuggestWidget.selectedBackground': string,
  /**
   *  建议小部件中选定条目的前景色。
   */
  'editorSuggestWidget.selectedForeground': string,
  /**
   *  建议小部件中选定条目的图标前景色。
   */
  'editorSuggestWidget.selectedIconForeground': string,
  /**
   *  建议小部件状态的前景色。
   */
  'editorSuggestWidgetStatus.foreground': string,

  /**
   *  编辑器悬停的前景色。
   */
  'editorHoverWidget.foreground': string,
  /**
   *  编辑器悬停的背景颜色。
   */
  'editorHoverWidget.background': string,
  /**
   *  编辑器悬停的边框颜色。
   */
  'editorHoverWidget.border': string,
  /**
   *  参数提示中活动项的前景色。
   */
  'editorHoverWidget.highlightForeground': string,
  /**
   *  编辑器悬停状态栏的背景颜色。
   */
  'editorHoverWidget.statusBarBackground': string,

  /**
   *  内联完成提供程序和建议预览显示的幽灵文本的边框颜色。
   */
  'editorGhostText.border': string,
  /**
   *  编辑器中幽灵文本的背景颜色。
   */
  'editorGhostText.background': string,
  /**
   *  内联完成提供程序和建议预览显示的幽灵文本的前景色。
   */
  'editorGhostText.foreground': string,

  /**
   *  编辑器粘性滚动的背景颜色。
   */
  'editorStickyScroll.background': string,
  /**
   *  编辑器粘性滚动在悬停时的背景颜色。
   */
  'editorStickyScrollHover.background': string,
  /**
   *  异常小部件的背景颜色。
   */
  'debugExceptionWidget.background': string,
  /**
   *  异常小部件的边框颜色。
   */
  'debugExceptionWidget.border': string,
  /**
   *  编辑器标记导航小部件的背景颜色。
   */
  'editorMarkerNavigation.background': string,
  /**
   *  编辑器标记导航小部件错误颜色。
   */
  'editorMarkerNavigationError.background': string,
  /**
   *  编辑器标记导航小部件警告颜色。
   */
  'editorMarkerNavigationWarning.background': string,
  /**
   *  编辑器标记导航小部件信息颜色。
   */
  'editorMarkerNavigationInfo.background': string,
  /**
   *  编辑器标记导航小部件错误标题背景颜色。
   */
  'editorMarkerNavigationError.headerBackground': string,
  /**
   *  编辑器标记导航小部件警告标题背景颜色。
   */
  'editorMarkerNavigationWarning.headerBackground': string,
  /**
   *  编辑器标记导航小部件信息标题背景颜色。
   */
  'editorMarkerNavigationInfo.headerBackground': string,
}
export interface PeekViewColors {
  /**
   *  peek 视图边框颜色和箭头颜色。
   */
  'peekView.border': string,
  /**
   *  peek 视图编辑器的背景颜色。
   */
  'peekViewEditor.background': string,
  /**
   *  peek 视图编辑器中 gutter 的背景颜色。
   */
  'peekViewEditorGutter.background': string,
  /**
   *  peek 视图编辑器中匹配高亮的背景颜色。
   */
  'peekViewEditor.matchHighlightBackground': string,
  /**
   *  peek 视图编辑器中匹配高亮的边框颜色。
   */
  'peekViewEditor.matchHighlightBorder': string,
  /**
   *  peek 视图编辑器中粘性滚动的背景颜色。
   */
  'peekViewEditorStickyScroll.background': string,
  /**
   *  peek 视图结果列表的背景颜色。
   */
  'peekViewResult.background': string,
  /**
   *  peek 视图结果列表中文件节点的前景色。
   */
  'peekViewResult.fileForeground': string,
  /**
   *  peek 视图结果列表中行节点的前景色。
   */
  'peekViewResult.lineForeground': string,
  /**
   *  peek 视图结果列表中匹配高亮的背景颜色。
   */
  'peekViewResult.matchHighlightBackground': string,
  /**
   *  peek 视图结果列表中选定条目的背景颜色。
   */
  'peekViewResult.selectionBackground': string,
  /**
   *  peek 视图结果列表中选定条目的前景色。
   */
  'peekViewResult.selectionForeground': string,
  /**
   *  peek 视图标题区域的背景颜色。
   */
  'peekViewTitle.background': string,
  /**
   *  peek 视图标题信息的前景色。
   */
  'peekViewTitleDescription.foreground': string,
  /**
   *  peek 视图标题的前景色。
   */
  'peekViewTitleLabel.foreground': string,
}
export interface MergeConflictsColors {
  /**
   *  冲突解决中当前头部的背景颜色。颜色不能是不透明的，以免隐藏底层装饰。
   */
  'merge.currentHeaderBackground': string,
  /**
   *  冲突解决中当前内容的背景颜色。颜色不能是不透明的，以免隐藏底层装饰。
   */
  'merge.currentContentBackground': string,
  /**
   *  冲突解决中传入头部的背景颜色。颜色不能是不透明的，以免隐藏底层装饰。
   */
  'merge.incomingHeaderBackground': string,
  /**
   *  冲突解决中传入内容的背景颜色。颜色不能是不透明的，以免隐藏底层装饰。
   */
  'merge.incomingContentBackground': string,
  /**
   *  冲突解决中头部和分割线的边框颜色。
   */
  'merge.border': string,
  /**
   *  冲突解决中共同祖先内容的背景颜色。颜色不能是不透明的，以免隐藏底层装饰。
   */
  'merge.commonContentBackground': string,
  /**
   *  冲突解决中共同祖先头部的背景颜色。颜色不能是不透明的，以免隐藏底层装饰。
   */
  'merge.commonHeaderBackground': string,
  /**
   *  冲突解决中当前概览标尺的前景色。
   */
  'editorOverviewRuler.currentContentForeground': string,
  /**
   *  冲突解决中传入概览标尺的前景色。
   */
  'editorOverviewRuler.incomingContentForeground': string,
  /**
   *  冲突解决中共同祖先概览标尺的前景色。
   */
  'editorOverviewRuler.commonContentForeground': string,
  /**
   *  已解决评论的编辑器概览标尺装饰颜色。该颜色应该是不透明的。
   */
  'editorOverviewRuler.commentForeground': string,
  /**
   *  未解决评论的编辑器概览标尺装饰颜色。该颜色应该是不透明的。
   */
  'editorOverviewRuler.commentUnresolvedForeground': string,
  /**
   *  变化的背景颜色。
   */
  'mergeEditor.change.background': string,
  /**
   *  单词变化的背景颜色。
   */
  'mergeEditor.change.word.background': string,
  /**
   *  未处理的未聚焦冲突的边框颜色。
   */
  'mergeEditor.conflict.unhandledUnfocused.border': string,
  /**
   *  未处理的聚焦冲突的边框颜色。
   */
  'mergeEditor.conflict.unhandledFocused.border': string,
  /**
   *  处理中的未聚焦冲突的边框颜色。
   */
  'mergeEditor.conflict.handledUnfocused.border': string,
  /**
   *  处理中的聚焦冲突的边框颜色。
   */
  'mergeEditor.conflict.handledFocused.border': string,
  /**
   *  处理中的概览标尺装饰颜色（输入1）。
   */
  'mergeEditor.conflict.handled.minimapOverViewRuler': string,
  /**
   *  未处理的概览标尺装饰颜色（输入1）。
   */
  'mergeEditor.conflict.unhandled.minimapOverViewRuler': string,
  /**
   *  "冲突行"文本的背景颜色。
   */
  'mergeEditor.conflictingLines.background': string,
  /**
   *  基础中变化的背景颜色。
   */
  'mergeEditor.changeBase.background': string,
  /**
   *  基础中单词变化的背景颜色。
   */
  'mergeEditor.changeBase.word.background': string,
  /**
   *  输入1的装饰背景颜色。
   */
  'mergeEditor.conflict.input1.background': string,
  /**
   *  输入2的装饰背景颜色。
   */
  'mergeEditor.conflict.input2.background': string,
}
export interface PanelColors {
  /**
   *  面板的背景颜色。
   */
  'panel.background': string,
  /**
   *  用于将面板与编辑器分隔开的面板边框颜色。
   */
  'panel.border': string,
  /**
   *  面板标题的拖放反馈颜色。面板显示在编辑器区域下方，包含输出和集成终端等视图。
   */
  'panel.dropBorder': string,
  /**
   *  活动面板标题的边框颜色。
   */
  'panelTitle.activeBorder': string,
  /**
   *  活动面板的标题颜色。
   */
  'panelTitle.activeForeground': string,
  /**
   *  非活动面板的标题颜色。
   */
  'panelTitle.inactiveForeground': string,
  /**
   *  面板中输入框的边框颜色。
   */
  'panelInput.border': string,
  /**
   *  在面板中水平堆叠多个视图时使用的面板部分边框颜色。面板显示在编辑器区域下方，包含输出和集成终端等视图。
   */
  'panelSection.border': string,
  /**
   *  面板部分的拖放反馈颜色。颜色应该有透明度，以便面板部分仍然可以显示。面板显示在编辑器区域下方，包含输出和集成终端等视图。
   */
  'panelSection.dropBackground': string,
  /**
   *  面板部分标题的背景颜色。面板显示在编辑器区域下方，包含输出和集成终端等视图。
   */
  'panelSectionHeader.background': string,
  /**
   *  面板部分标题的前景色。面板显示在编辑器区域下方，包含输出和集成终端等视图。
   */
  'panelSectionHeader.foreground': string,
  /**
   *  在面板中垂直堆叠多个视图时使用的面板部分标题边框颜色。面板显示在编辑器区域下方，包含输出和集成终端等视图。
   */
  'panelSectionHeader.border': string,
}
export interface StatusBarColors {
  /**
   *  标准状态栏的背景颜色。
   */
  'statusBar.background': string,
  /**
   *  状态栏的前景色。
   */
  'statusBar.foreground': string,
  /**
   *  分隔状态栏和编辑器的状态栏边框颜色。
   */
  'statusBar.border': string,
  /**
   *  调试程序时的状态栏背景颜色。
   */
  'statusBar.debuggingBackground': string,
  /**
   *  调试程序时的状态栏前景色。
   */
  'statusBar.debuggingForeground': string,
  /**
   *  在调试程序时分隔状态栏和编辑器的状态栏边框颜色。
   */
  'statusBar.debuggingBorder': string,
  /**
   *  当未打开文件夹时，状态栏的前景色。
   */
  'statusBar.noFolderForeground': string,
  /**
   *  当未打开文件夹时，状态栏的背景颜色。
   */
  'statusBar.noFolderBackground': string,
  /**
   *  在未打开文件夹时分隔状态栏和编辑器的状态栏边框颜色。
   */
  'statusBar.noFolderBorder': string,
  /**
   *  单击时状态栏项的背景颜色。
   */
  'statusBarItem.activeBackground': string,
  /**
   *  鼠标悬停时状态栏项的前景色。状态栏显示在窗口底部。
   */
  'statusBarItem.hoverForeground': string,
  /**
   *  鼠标悬停时状态栏项的背景颜色。
   */
  'statusBarItem.hoverBackground': string,
  /**
   *  状态栏突出显示项的前景色。
   */
  'statusBarItem.prominentForeground': string,
  /**
   *  状态栏突出显示项的背景颜色。
   */
  'statusBarItem.prominentBackground': string,
  /**
   *  鼠标悬停时突出显示的状态栏项的前景色。突出显示的项与其他状态栏条目区分开，以表示重要性。状态栏显示在窗口底部。
   */
  'statusBarItem.prominentHoverForeground': string,
  /**
   *  鼠标悬停时突出显示的状态栏项的背景颜色。
   */
  'statusBarItem.prominentHoverBackground': string,
  /**
   *  状态栏上远程指示器的背景颜色。
   */
  'statusBarItem.remoteBackground': string,
  /**
   *  状态栏上远程指示器的前景色。
   */
  'statusBarItem.remoteForeground': string,
  /**
   *  鼠标悬停时状态栏上远程指示器的背景颜色。
   */
  'statusBarItem.remoteHoverBackground': string,
  /**
   *  鼠标悬停时状态栏上远程指示器的前景色。
   */
  'statusBarItem.remoteHoverForeground': string,
  /**
   *  状态栏错误项的背景颜色。错误项与其他状态栏条目区分开，以表示错误条件。
   */
  'statusBarItem.errorBackground': string,
  /**
   *  状态栏错误项的前景色。错误项与其他状态栏条目区分开，以表示错误条件。
   */
  'statusBarItem.errorForeground': string,
  /**
   *  鼠标悬停时状态栏错误项的背景颜色。错误项与其他状态栏条目区分开，以表示错误条件。状态栏显示在窗口底部。
   */
  'statusBarItem.errorHoverBackground': string,
  /**
   *  鼠标悬停时状态栏错误项的前景色。错误项与其他状态栏条目区分开，以表示错误条件。状态栏显示在窗口底部。
   */
  'statusBarItem.errorHoverForeground': string,
  /**
   *  状态栏警告项的背景颜色。警告项与其他状态栏条目区分开，以表示警告条件。状态栏显示在窗口底部。
   */
  'statusBarItem.warningBackground': string,
  /**
   *  状态栏警告项的前景色。警告项与其他状态栏条目区分开，以表示警告条件。状态栏显示在窗口底部。
   */
  'statusBarItem.warningForeground': string,
  /**
   *  鼠标悬停时状态栏警告项的背景颜色。警告项与其他状态栏条目区分开，以表示警告条件。状态栏显示在窗口底部。
   */
  'statusBarItem.warningHoverBackground': string,
  /**
   *  鼠标悬停时状态栏警告项的前景色。警告项与其他状态栏条目区分开，以表示警告条件。状态栏显示在窗口底部。
   */
  'statusBarItem.warningHoverForeground': string,
  /**
   *  当悬停在包含两个悬停的项上时，状态栏项的背景颜色。状态栏显示在窗口底部。
   */
  'statusBarItem.compactHoverBackground': string,
  /**
   *  键盘导航焦点在状态栏项上时的状态栏项边框颜色。状态栏显示在窗口底部。
   */
  'statusBarItem.focusBorder': string,
  /**
   *  键盘导航焦点在状态栏上时的状态栏边框颜色。状态栏显示在窗口底部。
   */
  'statusBar.focusBorder': string,
  /**
   *  当工作台处于离线状态时，状态栏项的背景颜色。
   */
  'statusBarItem.offlineBackground': string,
  /**
   *  当工作台处于离线状态时，状态栏项的前景色。
   */
  'statusBarItem.offlineForeground': string,
  /**
   *  当工作台处于离线状态时，鼠标悬停时状态栏项的前景色。
   */
  'statusBarItem.offlineHoverForeground': string,
  /**
   *  当工作台处于离线状态时，鼠标悬停时状态栏项的背景颜色。状态栏显示在窗口底部。
   */
  'statusBarItem.offlineHoverBackground': string,
}
export interface TitleBarColors {
  /**
   *  窗口处于活动状态时的标题栏背景颜色。
   */
  'titleBar.activeBackground': string,
  /**
   *  窗口处于活动状态时的标题栏前景色。
   */
  'titleBar.activeForeground': string,
  /**
   *  窗口处于非活动状态时的标题栏背景颜色。
   */
  'titleBar.inactiveBackground': string,
  /**
   *  窗口处于非活动状态时的标题栏前景色。
   */
  'titleBar.inactiveForeground': string,
  /**
   *  标题栏的边框颜色。
   */
  'titleBar.border': string,
}
export interface MenuColors {
  /**
   *  菜单栏中选定菜单项的前景色。
   */
  'menubar.selectionForeground': string,
  /**
   *  菜单栏中选定菜单项的背景颜色。
   */
  'menubar.selectionBackground': string,
  /**
   *  菜单栏中选定菜单项的边框颜色。
   */
  'menubar.selectionBorder': string,
  /**
   *  菜单项的前景色。
   */
  'menu.foreground': string,
  /**
   *  菜单项的背景颜色。
   */
  'menu.background': string,
  /**
   *  菜单中选定菜单项的前景色。
   */
  'menu.selectionForeground': string,
  /**
   *  菜单中选定菜单项的背景颜色。
   */
  'menu.selectionBackground': string,
  /**
   *  菜单中选定菜单项的边框颜色。
   */
  'menu.selectionBorder': string,
  /**
   *  菜单中分隔符菜单项的颜色。
   */
  'menu.separatorBackground': string,
  /**
   *  菜单的边框颜色。
   */
  'menu.border': string,
}
export interface CommandCenterColors {
  /**
   *  命令中心的前景色。
   */
  'commandCenter.foreground': string,
  /**
   *  命令中心的活动前景色。
   */
  'commandCenter.activeForeground': string,
  /**
   *  命令中心的背景颜色。
   */
  'commandCenter.background': string,
  /**
   *  命令中心的活动背景颜色。
   */
  'commandCenter.activeBackground': string,
  /**
   *  命令中心的边框颜色。
   */
  'commandCenter.border': string,
  /**
   *  窗口处于非活动状态时命令中心的前景色。
   */
  'commandCenter.inactiveForeground': string,
  /**
   *  窗口处于非活动状态时命令中心的边框颜色。
   */
  'commandCenter.inactiveBorder': string,
  /**
   *  命令中心的活动边框颜色。
   */
  'commandCenter.activeBorder': string,
  /**
   *  当程序正在进行调试时的命令中心背景颜色。
   */
  'commandCenter.debuggingBackground': string,
}
export interface NotificationColors {
  /**
   *  通知中心的边框颜色。
   */
  'notificationCenter.border': string,
  /**
   *  通知中心标题的前景色。
   */
  'notificationCenterHeader.foreground': string,
  /**
   *  通知中心标题的背景颜色。
   */
  'notificationCenterHeader.background': string,
  /**
   *  通知弹窗的边框颜色。
   */
  'notificationToast.border': string,
  /**
   *  通知的前景色。
   */
  'notifications.foreground': string,
  /**
   *  通知的背景颜色。
   */
  'notifications.background': string,
  /**
   *  通知与其他通知在通知中心中分隔的边框颜色。
   */
  'notifications.border': string,
  /**
   *  通知中链接的前景色。
   */
  'notificationLink.foreground': string,
  /**
   *  通知错误图标的颜色。
   */
  'notificationsErrorIcon.foreground': string,
  /**
   *  通知警告图标的颜色。
   */
  'notificationsWarningIcon.foreground': string,
  /**
   *  通知信息图标的颜色。
   */
  'notificationsInfoIcon.foreground': string,
}
export interface BannerColors {
  /**
   *  Banner的背景颜色。
   */
  'banner.background': string,
  /**
   *  Banner的前景颜色。
   */
  'banner.foreground': string,
  /**
   *  Banner文本前面图标的颜色。
   */
  'banner.iconForeground': string,
}
export interface ExtensionsColors {
  /**
   *  Extension视图按钮前景色（例如“安装”按钮）。
   */
  'extensionButton.prominentForeground': string,
  /**
   *  Extension视图按钮背景色。
   */
  'extensionButton.prominentBackground': string,
  /**
   *  Extension视图按钮背景悬停色。
   */
  'extensionButton.prominentHoverBackground': string,
  /**
   *  Extension操作按钮背景色。
   */
  'extensionButton.background': string,
  /**
   *  Extension操作按钮前景色。
   */
  'extensionButton.foreground': string,
  /**
   *  Extension操作按钮背景悬停色。
   */
  'extensionButton.hoverBackground': string,
  /**
   *  Extension操作按钮的分隔符颜色。
   */
  'extensionButton.separator': string,
  /**
   *  Extension视图中远程徽章的背景色。
   */
  'extensionBadge.remoteBackground': string,
  /**
   *  Extension视图中远程徽章的前景色。
   */
  'extensionBadge.remoteForeground': string,
  /**
   *  Extension评级图标的颜色。
   */
  'extensionIcon.starForeground': string,
  /**
   *  Extension验证发布者图标的颜色。
   */
  'extensionIcon.verifiedForeground': string,
  /**
   *  预发布Extension的图标颜色。
   */
  'extensionIcon.preReleaseForeground': string,
  /**
   *  Extension赞助商图标的颜色。
   */
  'extensionIcon.sponsorForeground': string,

}
export interface QuickPickerColors {
  /**
   *  Quick picker中分组边框的颜色。
   */
  'pickerGroup.border': string,
  /**
   *  Quick picker中分组标签的颜色。
   */
  'pickerGroup.foreground': string,
  /**
   *  Quick input的背景颜色。Quick input小部件是颜色主题选择器等视图的容器。
   */
  'quickInput.background': string,
  /**
   *  Quick input的前景颜色。Quick input小部件是颜色主题选择器等视图的容器。
   */
  'quickInput.foreground': string,
  /**
   *  快速选择器中焦点项目的背景颜色。
   */
  'quickInputList.focusBackground': string,
  /**
   *  快速选择器中焦点项目的前景颜色。
   */
  'quickInputList.focusForeground': string,
  /**
   *  快速选择器中焦点项目的图标前景色。
   */
  'quickInputList.focusIconForeground': string,
  /**
   *  快速选择器标题的背景颜色。快速选择器小部件是命令面板等选择器的容器。
   */
  'quickInputTitle.background': string,
}
export interface KeybindingLabel {
  /**
   *  快捷键标签的背景颜色。快捷键标签用于表示键盘快捷键。
   */
  'keybindingLabel.background': string,
  /**
   *  快捷键标签的前景颜色。快捷键标签用于表示键盘快捷键。
   */
  'keybindingLabel.foreground': string,
  /**
   *  快捷键标签的边框颜色。快捷键标签用于表示键盘快捷键。
   */
  'keybindingLabel.border': string,
  /**
   *  快捷键标签的底部边框颜色。快捷键标签用于表示键盘快捷键。
   */
  'keybindingLabel.bottomBorder': string,
}
export interface KeybindingTable {
  /**
   *  键盘快捷键表头的背景颜色。
   */
  'keybindingTable.headerBackground': string,
  /**
   *  键盘快捷键表格交替行的背景颜色。
   */
  'keybindingTable.rowsBackground': string,
}
export interface IntegratedTerminalColors {
  /**
   *  集成终端视口的背景颜色。
   */
  'terminal.background': string,
  /**
   *  在终端中分隔分栏的边框颜色。默认为panel.border。
   */
  'terminal.border': string,
  /**
   *  集成终端的默认前景色。
   */
  'terminal.foreground': string,
  /**
   *  终端中的'Black' ANSI颜色。
   */
  'terminal.ansiBlack': string,
  /**
   *  终端中的'Blue' ANSI颜色。
   */
  'terminal.ansiBlue': string,
  /**
   *  终端中的'BrightBlack' ANSI颜色。
   */
  'terminal.ansiBrightBlack': string,
  /**
   *  终端中的'BrightBlue' ANSI颜色。
   */
  'terminal.ansiBrightBlue': string,
  /**
   *  终端中的'BrightCyan' ANSI颜色。
   */
  'terminal.ansiBrightCyan': string,
  /**
   *  终端中的'BrightGreen' ANSI颜色。
   */
  'terminal.ansiBrightGreen': string,
  /**
   *  终端中的'BrightMagenta' ANSI颜色。
   */
  'terminal.ansiBrightMagenta': string,
  /**
   *  终端中的'BrightRed' ANSI颜色。
   */
  'terminal.ansiBrightRed': string,
  /**
   *  终端中的'BrightWhite' ANSI颜色。
   */
  'terminal.ansiBrightWhite': string,
  /**
   *  终端中的'BrightYellow' ANSI颜色。
   */
  'terminal.ansiBrightYellow': string,
  /**
   *  终端中的'Cyan' ANSI颜色。
   */
  'terminal.ansiCyan': string,
  /**
   *  终端中的'Green' ANSI颜色。
   */
  'terminal.ansiGreen': string,
  /**
   *  终端中的'Magenta' ANSI颜色。
   */
  'terminal.ansiMagenta': string,
  /**
   *  终端中的'Red' ANSI颜色。
   */
  'terminal.ansiRed': string,
  /**
   *  终端中的'White' ANSI颜色。
   */
  'terminal.ansiWhite': string,
  /**
   *  终端中的'Yellow' ANSI颜色。
   */
  'terminal.ansiYellow': string,
  /**
   *  终端的选择背景颜色。
   */
  'terminal.selectionBackground': string,
  /**
   *  终端的选择前景颜色。当这个值为null时，选择前景色将被保留，并应用最小对比度特性。
   */
  'terminal.selectionForeground': string,
  /**
   *  终端失去焦点时的选择背景颜色。
   */
  'terminal.inactiveSelectionBackground': string,
  /**
   *  终端中当前搜索匹配的颜色。颜色不能是不透明的，以免隐藏底层终端内容。
   */
  'terminal.findMatchBackground': string,
  /**
   *  终端中当前搜索匹配的边框颜色。
   */
  'terminal.findMatchBorder': string,
  /**
   *  终端中其他搜索匹配的颜色。颜色不能是不透明的，以免隐藏底层终端内容。
   */
  'terminal.findMatchHighlightBackground': string,
  /**
   *  终端中其他搜索匹配的边框颜色。
   */
  'terminal.findMatchHighlightBorder': string,
  /**
   *  在终端中悬停链接时的高亮颜色。
   */
  'terminal.hoverHighlightBackground': string,
  /**
   *  终端光标的背景颜色。允许自定义被块状光标遮挡的字符的颜色。
   */
  'terminalCursor.background': string,
  /**
   *  终端光标的前景颜色。
   */
  'terminalCursor.foreground': string,
  /**
   *  拖动到终端上方时的背景颜色。颜色应该具有透明度，以便终端内容仍然可见。
   */
  'terminal.dropBackground': string,
  /**
   *  面板中终端选项卡侧边的边框。默认为'tab.activeBorder'。
   */
  'terminal.tab.activeBorder': string,
  /**
   *  默认终端命令装饰的背景颜色。
   */
  'terminalCommandDecoration.defaultBackground': string,
  /**
   *  成功命令的终端命令装饰背景颜色。
   */
  'terminalCommandDecoration.successBackground': string,
  /**
   *  错误命令的终端命令装饰背景颜色。
   */
  'terminalCommandDecoration.errorBackground': string,
  /**
   *  概览标尺光标的颜色。
   */
  'terminalOverviewRuler.cursorForeground': string,
  /**
   *  终端中查找匹配的概览标尺标记颜色。
   */
  'terminalOverviewRuler.findMatchForeground': string,
  /**
   *  终端中粘性滚动叠加层的背景颜色。
   */
  'terminalStickyScroll.background': string,
  /**
   *  终端中悬停时粘性滚动叠加层的背景颜色。
   */
  'terminalStickyScrollHover.background': string,
}
export interface DebugColors {
/**
 *  调试工具栏的背景颜色。
 */
  'debugToolBar.background': string,
  /**
   *  调试工具栏的边框颜色。
   */
  'debugToolBar.border': string,
  /**
   *  编辑器中顶部堆栈帧高亮的背景颜色。
   */
  'editor.stackFrameHighlightBackground': string,
  /**
   *  编辑器中焦点堆栈帧高亮的背景颜色。
   */
  'editor.focusedStackFrameHighlightBackground': string,
  /**
   *  调试内联值文本的颜色。
   */
  'editor.inlineValuesForeground': string,
  /**
   *  调试内联值的背景颜色。
   */
  'editor.inlineValuesBackground': string,
  /**
   *  当调试器在异常处中断时，在CALL STACK视图中显示的标签的前景颜色。
   */
  'debugView.exceptionLabelForeground': string,
  /**
   *  当调试器在异常处中断时，在CALL STACK视图中显示的标签的背景颜色。
   */
  'debugView.exceptionLabelBackground': string,
  /**
   *  在CALL STACK视图中显示的标签，用于显示当前会话或线程的状态的前景颜色。
   */
  'debugView.stateLabelForeground': string,
  /**
   *  在CALL STACK视图中显示的标签，用于显示当前会话或线程的状态的背景颜色。
   */
  'debugView.stateLabelBackground': string,
  /**
   *  用于在调试视图中（如变量视图）中突出显示值更改的颜色。
   */
  'debugView.valueChangedHighlight': string,
  /**
   *  在调试视图（如变量或监视视图）中显示的令牌名称的前景颜色。
   */
  'debugTokenExpression.name': string,
  /**
   *  在调试视图中（如变量或监视视图）显示的令牌值的前景颜色。
   */
  'debugTokenExpression.value': string,
  /**
   *  在调试视图中字符串的前景颜色。
   */
  'debugTokenExpression.string': string,
  /**
   *  在调试视图中布尔值的前景颜色。
   */
  'debugTokenExpression.boolean': string,
  /**
   *  在调试视图中数字的前景颜色。
   */
  'debugTokenExpression.number': string,
  /**
   *  在调试视图中表达式错误的前景颜色。
   */
  'debugTokenExpression.error': string,
}
export interface TestingColors {
  /**
   *  测试资源管理器中“失败”图标的颜色。
   */
  'testing.iconFailed': string,
  /**
   *  测试资源管理器中“错误”图标的颜色。
   */
  'testing.iconErrored': string,
  /**
   *  测试资源管理器中“通过”图标的颜色。
   */
  'testing.iconPassed': string,
  /**
   *  编辑器中“运行”图标的颜色。
   */
  'testing.runAction': string,
  /**
   *  测试资源管理器中“排队”图标的颜色。
   */
  'testing.iconQueued': string,
  /**
   *  测试资源管理器中“未设置”图标的颜色。
   */
  'testing.iconUnset': string,
  /**
   *  测试资源管理器中“跳过”图标的颜色。
   */
  'testing.iconSkipped': string,
  /**
   *  peek视图边框和箭头的颜色。
   */
  'testing.peekBorder': string,
  /**
   *  peek视图标题栏的背景颜色。
   */
  'testing.peekHeaderBackground': string,
  /**
   *  在编辑器中显示的测试错误消息的文本颜色。
   */
  'testing.message.error.decorationForeground': string,
  /**
   *  在编辑器中显示的测试错误消息旁边的边距颜色。
   */
  'testing.message.error.lineBackground': string,
  /**
   *  在编辑器中显示的测试信息消息的文本颜色。
   */
  'testing.message.info.decorationForeground': string,
  /**
   *  在编辑器中显示的测试信息消息旁边的边距颜色。
   */
  'testing.message.info.lineBackground': string,
}
export interface WelcomePageColors {
  /**
   *  欢迎页面的背景颜色。
   */
  'welcomePage.background': string,
  /**
   *  欢迎页面进度条的前景颜色。
   */
  'welcomePage.progress.background': string,
  /**
   *  欢迎页面进度条的背景颜色。
   */
  'welcomePage.progress.foreground': string,
  /**
   *  欢迎页面上磁贴的背景颜色。
   */
  'welcomePage.tileBackground': string,
  /**
   *  欢迎页面上磁贴的悬停背景颜色。
   */
  'welcomePage.tileHoverBackground': string,
  /**
   *  欢迎页面上磁贴的边框颜色。
   */
  'welcomePage.tileBorder': string,

  /**
   *  交互式 Playground 中嵌入式编辑器的背景颜色。
   */
  'walkThrough.embeddedEditorBackground': string,
  /**
   *  演练步骤标题的前景颜色。
   */
  'walkthrough.stepTitle.foreground': string,
}
export interface GitColors {
/**
 *  新增的 Git 资源的颜色。用于文件标签和 SCM 视图。
 */
  'gitDecoration.addedResourceForeground': string,
  /**
   *  修改的 Git 资源的颜色。用于文件标签和 SCM 视图。
   */
  'gitDecoration.modifiedResourceForeground': string,
  /**
   *  删除的 Git 资源的颜色。用于文件标签和 SCM 视图。
   */
  'gitDecoration.deletedResourceForeground': string,
  /**
   *  重命名或复制的 Git 资源的颜色。用于文件标签和 SCM 视图。
   */
  'gitDecoration.renamedResourceForeground': string,
  /**
   *  暂存的修改 Git 资源的颜色。用于文件标签和 SCM 视图。
   */
  'gitDecoration.stageModifiedResourceForeground': string,
  /**
   *  暂存的删除 Git 资源的颜色。用于文件标签和 SCM 视图。
   */
  'gitDecoration.stageDeletedResourceForeground': string,
  /**
   *  未跟踪的 Git 资源的颜色。用于文件标签和 SCM 视图。
   */
  'gitDecoration.untrackedResourceForeground': string,
  /**
   *  忽略的 Git 资源的颜色。用于文件标签和 SCM 视图。
   */
  'gitDecoration.ignoredResourceForeground': string,
  /**
   *  冲突的 Git 资源的颜色。用于文件标签和 SCM 视图。
   */
  'gitDecoration.conflictingResourceForeground': string,
  /**
   *  子模块资源的颜色。
   */
  'gitDecoration.submoduleResourceForeground': string,
}
export interface SettingsEditorColors {
/**
 *  部分标题或活动标题的前景颜色。
 */
  'settings.headerForeground': string,
  /**
   *  指示已修改设置的线条。
   */
  'settings.modifiedItemIndicator': string,
  /**
   *  下拉菜单的背景颜色。
   */
  'settings.dropdownBackground': string,
  /**
   *  下拉菜单的前景颜色。
   */
  'settings.dropdownForeground': string,
  /**
   *  下拉菜单的边框颜色。
   */
  'settings.dropdownBorder': string,
  /**
   *  下拉菜单列表的边框颜色。
   */
  'settings.dropdownListBorder': string,
  /**
   *  复选框的背景颜色。
   */
  'settings.checkboxBackground': string,
  /**
   *  复选框的前景颜色。
   */
  'settings.checkboxForeground': string,
  /**
   *  复选框的边框颜色。
   */
  'settings.checkboxBorder': string,
  /**
   *  鼠标悬停时设置行的背景颜色。
   */
  'settings.rowHoverBackground': string,
  /**
   *  文本输入框的背景颜色。
   */
  'settings.textInputBackground': string,
  /**
   *  文本输入框的前景颜色。
   */
  'settings.textInputForeground': string,
  /**
   *  文本输入框的边框颜色。
   */
  'settings.textInputBorder': string,
  /**
   *  数字输入框的背景颜色。
   */
  'settings.numberInputBackground': string,
  /**
   *  数字输入框的前景颜色。
   */
  'settings.numberInputForeground': string,
  /**
   *  数字输入框的边框颜色。
   */
  'settings.numberInputBorder': string,
  /**
   *  获得焦点的设置行的背景颜色。
   */
  'settings.focusedRowBackground': string,
  /**
   *  当行获得焦点时，行的顶部和底部边框的颜色。
   */
  'settings.focusedRowBorder': string,
  /**
   *  头部容器边框的颜色。
   */
  'settings.headerBorder': string,
  /**
   *  设置编辑器分割视图 sash 边框的颜色。
   */
  'settings.sashBorder': string,
  /**
   *  部分标题或悬停标题的前景颜色。
   */
  'settings.settingsHeaderHoverForeground': string,
}
export interface BreadcrumbsColors {
  /**
   *  面包屑导航项的颜色。
   */
  'breadcrumb.foreground': string,
  /**
   *  面包屑导航项的背景颜色。
   */
  'breadcrumb.background': string,
  /**
   *  聚焦的面包屑导航项的颜色。
   */
  'breadcrumb.focusForeground': string,
  /**
   *  选中的面包屑导航项的颜色。
   */
  'breadcrumb.activeSelectionForeground': string,
  /**
   *  面包屑导航项选择器的背景颜色。
   */
  'breadcrumbPicker.background': string,
}
export interface SnippetsColors {
  /**
   *  Snippet tabstop 的高亮背景颜色。
   */
  'editor.snippetTabstopHighlightBackground': string,
  /**
   *  Snippet tabstop 的高亮边框颜色。
   */
  'editor.snippetTabstopHighlightBorder': string,
  /**
   *  Snippet 最后一个 tabstop 的高亮背景颜色。
   */
  'editor.snippetFinalTabstopHighlightBackground': string,
  /**
   *  Snippet 最后一个 tabstop 的高亮边框颜色。
   */
  'editor.snippetFinalTabstopHighlightBorder': string,
}
export interface SymbolIconsColors {
/**
 *  数组符号的前景颜色。
 */
  'symbolIcon.arrayForeground': string,
  /**
   *  布尔符号的前景颜色。
   */
  'symbolIcon.booleanForeground': string,
  /**
   *  类符号的前景颜色。
   */
  'symbolIcon.classForeground': string,
  /**
   *  颜色符号的前景颜色。
   */
  'symbolIcon.colorForeground': string,
  /**
   *  常量符号的前景颜色。
   */
  'symbolIcon.constantForeground': string,
  /**
   *  构造函数符号的前景颜色。
   */
  'symbolIcon.constructorForeground': string,
  /**
   *  枚举符号的前景颜色。
   */
  'symbolIcon.enumeratorForeground': string,
  /**
   *  枚举成员符号的前景颜色。
   */
  'symbolIcon.enumeratorMemberForeground': string,
  /**
   *  事件符号的前景颜色。
   */
  'symbolIcon.eventForeground': string,
  /**
   *  字段符号的前景颜色。
   */
  'symbolIcon.fieldForeground': string,
  /**
   *  文件符号的前景颜色。
   */
  'symbolIcon.fileForeground': string,
  /**
   *  文件夹符号的前景颜色。
   */
  'symbolIcon.folderForeground': string,
  /**
   *  函数符号的前景颜色。
   */
  'symbolIcon.functionForeground': string,
  /**
   *  接口符号的前景颜色。
   */
  'symbolIcon.interfaceForeground': string,
  /**
   *  键符号的前景颜色。
   */
  'symbolIcon.keyForeground': string,
  /**
   *  关键字符号的前景颜色。
   */
  'symbolIcon.keywordForeground': string,
  /**
   *  方法符号的前景颜色。
   */
  'symbolIcon.methodForeground': string,
  /**
   *  模块符号的前景颜色。
   */
  'symbolIcon.moduleForeground': string,
  /**
   *  命名空间符号的前景颜色。
   */
  'symbolIcon.namespaceForeground': string,
  /**
   *  null 符号的前景颜色。
   */
  'symbolIcon.nullForeground': string,
  /**
   *  数字符号的前景颜色。
   */
  'symbolIcon.numberForeground': string,
  /**
   *  对象符号的前景颜色。
   */
  'symbolIcon.objectForeground': string,
  /**
   *  运算符符号的前景颜色。
   */
  'symbolIcon.operatorForeground': string,
  /**
   *  包符号的前景颜色。
   */
  'symbolIcon.packageForeground': string,
  /**
   *  属性符号的前景颜色。
   */
  'symbolIcon.propertyForeground': string,
  /**
   *  引用符号的前景颜色。
   */
  'symbolIcon.referenceForeground': string,
  /**
   *  Snippet 符号的前景颜色。
   */
  'symbolIcon.snippetForeground': string,
  /**
   *  字符串符号的前景颜色。
   */
  'symbolIcon.stringForeground': string,
  /**
   *  结构符号的前景颜色。
   */
  'symbolIcon.structForeground': string,
  /**
   *  文本符号的前景颜色。
   */
  'symbolIcon.textForeground': string,
  /**
   *  类型参数符号的前景颜色。
   */
  'symbolIcon.typeParameterForeground': string,
  /**
   *  单位符号的前景颜色。
   */
  'symbolIcon.unitForeground': string,
  /**
   *  变量符号的前景颜色。
   */
  'symbolIcon.variableForeground': string,
}
export interface DebugIconsColors {
/**
 *  断点的图标颜色。
 */
  'debugIcon.breakpointForeground': string,
  /**
   *  禁用断点的图标颜色。
   */
  'debugIcon.breakpointDisabledForeground': string,
  /**
   *  未验证的断点的图标颜色。
   */
  'debugIcon.breakpointUnverifiedForeground': string,
  /**
   *  当前断点堆栈帧的图标颜色。
   */
  'debugIcon.breakpointCurrentStackframeForeground': string,
  /**
   *  所有断点堆栈帧的图标颜色。
   */
  'debugIcon.breakpointStackframeForeground': string,
  /**
   *  开始调试的调试工具栏图标。
   */
  'debugIcon.startForeground': string,
  /**
   *  暂停的调试工具栏图标。
   */
  'debugIcon.pauseForeground': string,
  /**
   *  停止的调试工具栏图标。
   */
  'debugIcon.stopForeground': string,
  /**
   *  断开连接的调试工具栏图标。
   */
  'debugIcon.disconnectForeground': string,
  /**
   *  重启的调试工具栏图标。
   */
  'debugIcon.restartForeground': string,
  /**
   *  单步跳过的调试工具栏图标。
   */
  'debugIcon.stepOverForeground': string,
  /**
   *  单步进入的调试工具栏图标。
   */
  'debugIcon.stepIntoForeground': string,
  /**
   *  单步跳出的调试工具栏图标。
   */
  'debugIcon.stepOutForeground': string,
  /**
   *  继续的调试工具栏图标。
   */
  'debugIcon.continueForeground': string,
  /**
   *  回退一步的调试工具栏图标。
   */
  'debugIcon.stepBackForeground': string,
  /**
   *  调试 REPL 控制台中信息消息的前景颜色。
   */
  'debugConsole.infoForeground': string,
  /**
   *  调试 REPL 控制台中警告消息的前景颜色。
   */
  'debugConsole.warningForeground': string,
  /**
   *  调试 REPL 控制台中错误消息的前景颜色。
   */
  'debugConsole.errorForeground': string,
  /**
   *  调试 REPL 控制台中源文件名的前景颜色。
   */
  'debugConsole.sourceForeground': string,
  /**
   *  调试控制台输入标记图标的前景颜色。
   */
  'debugConsoleInputIcon.foreground': string,
}
export interface NotebookColors {
  /**
   *  笔记本的背景颜色。
   */
  'notebook.editorBackground': string,
  /**
   *  笔记本单元格的边框颜色。
   */
  'notebook.cellBorderColor': string,
  /**
   *  当鼠标悬停在单元格上时，单元格的背景颜色。
   */
  'notebook.cellHoverBackground': string,
  /**
   *  笔记本单元格插入指示器的颜色。
   */
  'notebook.cellInsertionIndicator': string,
  /**
   *  笔记本单元格状态栏项的背景颜色。
   */
  'notebook.cellStatusBarItemHoverBackground': string,
  /**
   *  单元格底部工具栏中分隔符的颜色。
   */
  'notebook.cellToolbarSeparator': string,
  /**
   *  笔记本单元格编辑器的背景颜色。
   */
  'notebook.cellEditorBackground': string,
  /**
   *  当单元格聚焦时，单元格的背景颜色。
   */
  'notebook.focusedCellBackground': string,
  /**
   *  当单元格聚焦时，单元格的边框颜色。
   */
  'notebook.focusedCellBorder': string,
  /**
   *  笔记本单元格编辑器的边框颜色。
   */
  'notebook.focusedEditorBorder': string,
  /**
   *  当主焦点不在编辑器内时，聚焦单元格的顶部和底部边框颜色。
   */
  'notebook.inactiveFocusedCellBorder': string,
  /**
   *  当多个单元格被选择时，单元格的边框颜色。
   */
  'notebook.inactiveSelectedCellBorder': string,
  /**
   *  笔记本输出容器的背景颜色。
   */
  'notebook.outputContainerBackgroundColor': string,
  /**
   *  笔记本输出容器的边框颜色。
   */
  'notebook.outputContainerBorderColor': string,
  /**
   *  当单元格被选择时，单元格的背景颜色。
   */
  'notebook.selectedCellBackground': string,
  /**
   *  当单元格被选择但未聚焦时，单元格的顶部和底部边框颜色。
   */
  'notebook.selectedCellBorder': string,
  /**
   *  高亮单元格的背景颜色。
   */
  'notebook.symbolHighlightBackground': string,
  /**
   *  单击时笔记本滚动条滑块的背景颜色。
   */
  'notebookScrollbarSlider.activeBackground': string,
  /**
   *  笔记本滚动条滑块的背景颜色。
   */
  'notebookScrollbarSlider.background': string,
  /**
   *  鼠标悬停时笔记本滚动条滑块的背景颜色。
   */
  'notebookScrollbarSlider.hoverBackground': string,
  /**
   *  笔记本单元格状态栏中错误图标的颜色。
   */
  'notebookStatusErrorIcon.foreground': string,
  /**
   *  笔记本单元格状态栏中正在运行图标的颜色。
   */
  'notebookStatusRunningIcon.foreground': string,
  /**
   *  笔记本单元格状态栏中成功图标的颜色。
   */
  'notebookStatusSuccessIcon.foreground': string,
  /**
   *  笔记本编辑器概览标尺中正在运行单元格装饰的颜色。
   */
  'notebookEditorOverviewRuler.runningCellForeground': string,
}
export interface ChartColors {
  /**
   *  图表中文本的对比颜色。
   */
  'charts.foreground': string,
  /**
   *  图表中线条的颜色。
   */
  'charts.lines': string,
  /**
   *  图表中红色元素的颜色。
   */
  'charts.red': string,
  /**
   *  图表中蓝色元素的颜色。
   */
  'charts.blue': string,
  /**
   *  图表中黄色元素的颜色。
   */
  'charts.yellow': string,
  /**
   *  图表中橙色元素的颜色。
   */
  'charts.orange': string,
  /**
   *  图表中绿色元素的颜色。
   */
  'charts.green': string,
  /**
   *  图表中紫色元素的颜色。
   */
  'charts.purple': string,
}
export interface PortsColors {
  /**
   *  具有关联运行进程的端口图标的颜色。
   */
  'ports.iconRunningProcessForeground': string,
}
export interface CommentsViewColors {
  /**
   *  已解决评论的图标颜色。
   */
  'commentsView.resolvedIcon': string,
  /**
   *  未解决评论的图标颜色。
   */
  'commentsView.unresolvedIcon': string,
}
export interface ActionBarColors {
  /**
   *  操作栏中已切换动作项的背景颜色。
   */
  'actionBar.toggledBackground': string,
}
export interface SimpleFindWidget {
  /**
   *  闪电小部件边框的边框颜色。
   */
  'simpleFindWidget.sashBorder': string,
}
export interface SCM {
  /**
   *  SCM（源代码管理）历史记录项添加部分的前景色。
   */
  'scm.historyItemAdditionsForeground': string,
  /**
   *  SCM（源代码管理）历史记录项删除部分的前景色。
   */
  'scm.historyItemDeletionsForeground': string,
  /**
   *  SCM（源代码管理）历史记录项统计边框的颜色。
   */
  'scm.historyItemStatisticsBorder': string,
  /**
   *  SCM（源代码管理）历史记录项被选中的统计边框的颜色。
   */
  'scm.historyItemSelectedStatisticsBorder': string,
}
