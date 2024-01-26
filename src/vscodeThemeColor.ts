import { themeColor } from './colors'
import type * as VSCodeColor from './interface'

interface CreateThemeOptions {
  v: (...args: any[]) => string
  pick: (...args: any[]) => string
  palette: Record<string, any>
}
export class VscodeThemeColorGenerator {
  private colors: Record<string, string>
  private palette: Record<string, any>
  private v: (...args: any[]) => string
  private pick: (...args: any[]) => string

  constructor(options: CreateThemeOptions) {
    this.colors = {}
    this.v = options.v
    this.pick = options.pick
    this.palette = options.palette
  }

  addColors<T extends Record<string, any>>(colors: T): this {
    this.colors = { ...this.colors, ...colors }
    return this
  }

  /**
   * Contrast colors
   * @url https://code.visualstudio.com/api/references/theme-color#contrast-colors
   */
  registerContrastColors(): this {
    this.addColors<VSCodeColor.ContrastColors>({
      contrastActiveBorder: '',
      contrastBorder: '',
    })
    return this
  }

  /**
   * register baseColor
   * @url https://code.visualstudio.com/api/references/theme-color#base-colors
   */
  registerBaseColor(): this {
    this.addColors<VSCodeColor.BaseColor>({
      // '聚焦元素的整体边框颜色。如果没有被组件覆盖，则使用此颜色。'
      'focusBorder': '#ffffff3f',
      // 整体前景色。如果没有被组件覆盖，则使用此颜色。
      'foreground': '#999999',
      // 禁用元素的整体前景色。如果没有被组件覆盖，则使用此颜色。
      'disabledForeground': '#777777',
      // 部件（例如编辑器内的查找/替换）的边框颜色。
      'widget.border': '',
      // 部件（例如编辑器内的查找/替换）的阴影颜色。
      'widget.shadow': '#00000033',
      // 工作台中文本选择的背景颜色（适用于输入字段或文本区域，不适用于编辑器和终端内的选择）。
      'selection.background': '#444444',
      // 描述文本的前景色，提供额外的信息，例如标签的描述。
      'descriptionForeground': this.v('secondaryForeground'),
      // 错误消息的整体前景色（如果没有被组件覆盖，则使用此颜色）。
      'errorForeground': this.v('red'),
      // 工作台中图标的默认颜色。
      'icon.foreground': '',
      // 可拖动分割条的悬停边框颜色。
      'sash.hoverBorder': '#ff8787',
    })
    return this
  }

  /**
   * Window border
   * @url https://code.visualstudio.com/api/references/theme-color#window-border
   */
  registerWindowBorder(): this {
    return this.addColors<VSCodeColor.WindowBorder>({
      'window.activeBorder': '',
      'window.inactiveBorder': '',
    })
  }

  /**
   * Text colors
   * Colors inside a text document, such as the welcome page.
   * @url https://code.visualstudio.com/api/references/theme-color#text-colors
   */
  registerTextColors() {
    return this.addColors<VSCodeColor.TextColor>({
      // 文本中引用块的背景颜色。
      'textBlockQuote.background': this.v('background'),
      // 文本中引用块的边框颜色。
      'textBlockQuote.border': this.v('border'),
      // 文本中代码块的背景颜色。
      'textCodeBlock.background': this.v('background'),
      // 链接在文本中被点击或悬停时的前景色。
      'textLink.activeForeground': this.v('primary'),
      // 文本中链接的前景色。
      'textLink.foreground': this.v('primary'),
      // 预格式化文本段的前景色。
      'textPreformat.foreground': this.palette.gray[6],
      // 预格式化文本段的背景颜色。
      'textPreformat.background': '',
      // 文本分隔符的颜色。
      'textSeparator.foreground': this.palette.gray[3],
    })
  }

  /**
   * Action colors
   * A set of colors to control the interactions with actions across the workbench.
   * @url https://code.visualstudio.com/api/references/theme-color#action-colors
   */
  registerActionColors(): this {
    return this.addColors<VSCodeColor.ActionColor>({
      // 鼠标悬停在工具栏操作上时的背景颜色。
      'toolbar.hoverBackground': '#444444',
      // 鼠标悬停在工具栏操作上时的轮廓颜色。
      'toolbar.hoverOutline': '',
      // 鼠标按住工具栏操作时的背景颜色。
      'toolbar.activeBackground': '',
    })
  }

  /**
   * Button control
   * A set of colors for button widgets such as **Open Folder** button in the Explorer of a new window.
   * @url https://code.visualstudio.com/api/references/theme-color#button-control
   */
  registerButtonControl() {
    return this.addColors<VSCodeColor.ButtonControl>({
      // 按钮的背景颜色。
      'button.background': this.v('primary'),
      // 按钮的前景颜色。
      'button.foreground': this.v('background'),
      // 按钮的边框颜色。
      'button.border': '',
      // 按钮的分隔线颜色。
      'button.separator': '',
      // 鼠标悬停在按钮上时的背景颜色。
      'button.hoverBackground': this.v('primary'),
      // 次要按钮的前景颜色。
      'button.secondaryForeground': '',
      // 次要按钮的背景颜色。
      'button.secondaryBackground': '',
      // 鼠标悬停在次要按钮上时的背景颜色。
      'button.secondaryHoverBackground': '',
      // 复选框部件的背景颜色。
      'checkbox.background': this.v('activeBackground'),
      // 复选框部件的前景颜色。
      'checkbox.foreground': '',
      // 复选框部件的边框颜色。
      'checkbox.border': this.pick({ light: this.palette.gray[3], dark: this.palette.gray[1] }),
      // 当复选框所在的元素被选中时，复选框部件的背景颜色。
      'checkbox.selectBackground': '',
      // 当复选框所在的元素被选中时，复选框部件的边框颜色。
      'checkbox.selectBorder': '',
    })
  }

  /**
   * Dropdown control
   * A set of colors for all Dropdown widgets such as in the Integrated Terminal or the Output panel. Note that the Dropdown control is not used on macOS currently.
   * @url https://code.visualstudio.com/api/references/theme-color#dropdown-control
   */
  registerDropdownControl() {
    return this.addColors<VSCodeColor.DropdownControl>({
      // 下拉菜单的背景颜色。
      'dropdown.background': this.v('background'),
      // 下拉菜单列表的背景颜色。
      'dropdown.listBackground': this.v('activeBackground'),
      // 下拉菜单的边框颜色。
      'dropdown.border': this.v('border'),
      // 下拉菜单的前景颜色。
      'dropdown.foreground': this.v('foreground'),
    })
  }

  /**
   * Input Control
   * Colors for input controls such as in the Search view or the Find/Replace dialog.
   * @url https://code.visualstudio.com/api/references/theme-color#input-control
   */
  registerInputControl() {
    return this.addColors<VSCodeColor.InputControl>({
      // 输入框的背景颜色。
      'input.background': this.v('activeBackground'),
      // 输入框的边框颜色。
      'input.border': this.v('border'),
      // 输入框的前景颜色。
      'input.foreground': this.v('foreground'),
      // 输入框占位符文本的前景色。
      'input.placeholderForeground': this.v('secondaryForeground'),
      // 输入字段中已激活选项的背景颜色。
      'inputOption.activeBackground': this.v('ignored'),
      // 输入字段中已激活选项的边框颜色。
      'inputOption.activeBorder': '#777777',
      // 输入字段中已激活选项的前景颜色。
      'inputOption.activeForeground': '#ffffff',
      // 输入字段中已激活选项的鼠标悬停背景色。
      'inputOption.hoverBackground': '',
      // 错误严重性的输入验证背景颜色。
      'inputValidation.errorBackground': '',
      // 错误严重性的输入验证前景颜色。
      'inputValidation.errorForeground': '',
      // 错误严重性的输入验证边框颜色。
      'inputValidation.errorBorder': '',
      // 信息严重性的输入验证背景颜色。
      'inputValidation.infoBackground': '',
      // 信息严重性的输入验证前景颜色。
      'inputValidation.infoForeground': '',
      // 信息严重性的输入验证边框颜色。
      'inputValidation.infoBorder': '',
      // 警告严重性的输入验证背景颜色。
      'inputValidation.warningBackground': '',
      // 警告严重性的输入验证前景颜色。
      'inputValidation.warningForeground': '',
      // 警告严重性的输入验证边框颜色。
      'inputValidation.warningBorder': '',
    })
  }

  /**
   * Scrollbar control
   * @url https://code.visualstudio.com/api/references/theme-color#scrollbar-control
   */
  registerScrollbarControl() {
    return this.addColors<VSCodeColor.ScrollbarControl>({
      // 滚动条滑块的阴影，用于指示滚动视图。
      'scrollbar.shadow': this.pick({ light: '#6a737d33', dark: '#0000' }),
      // 点击时滚动条滑块的背景颜色。
      'scrollbarSlider.activeBackground': this.v('ignored'),
      // 滚动条滑块的背景颜色。
      'scrollbarSlider.background': this.v('faded'),
      // 鼠标悬停时滚动条滑块的背景颜色。
      'scrollbarSlider.hoverBackground': this.v('ignored'),
    })
  }

  /**
   * Badge
   * Badges are small information labels, for example, search results count.
   * @url https://code.visualstudio.com/api/references/theme-color#badge
   */
  registerBadge() {
    return this.addColors<VSCodeColor.Badge>({
      // 徽章的前景颜色。
      'badge.foreground': this.v('background'),
      // 徽章的背景颜色。
      'badge.background': this.v('secondaryForeground'),
    })
  }

  /**
   * Progress bar
   * @url https://code.visualstudio.com/api/references/theme-color#progress-bar
   */
  registerProgressBar() {
    return this.addColors<VSCodeColor.ProgressBar>({
      // 长时间运行操作时显示的进度条的背景颜色。
      'progressBar.background': this.v('primary'),
    })
  }

  /**
   * Lists and trees
   * Colors for list and trees like the File Explorer. An active list/tree has keyboard focus, an inactive does not.
   * @url https://code.visualstudio.com/api/references/theme-color#lists-and-trees
   */
  registerListsAndTrees() {
    return this.addColors<VSCodeColor.ListsAndTrees>({
      // 当列表/树处于活动状态时，所选项的背景颜色。
      'list.activeSelectionBackground': this.v('activeBackground'),
      // 当列表/树处于活动状态时，所选项的前景颜色。
      'list.activeSelectionForeground': this.v('foreground'),
      // 当列表/树处于活动状态时，所选项的图标前景颜色。活动的列表/树具有键盘焦点，非活动的列表/树没有。
      'list.activeSelectionIconForeground': '',
      // 使用鼠标移动项目时，列表/树的拖放背景。
      'list.dropBackground': '#ffffff12',
      // 当列表/树处于活动状态时，聚焦项的背景颜色。
      'list.focusBackground': this.v('activeBackground'),
      // 当列表/树处于活动状态时，聚焦项的前景颜色。活动的列表/树具有键盘焦点，非活动的列表/树没有。
      'list.focusForeground': '',
      // 在列表/树内搜索时，活动聚焦项上匹配高亮的前景颜色。
      'list.focusHighlightForeground': '#66b395',
      // 当列表/树处于活动状态时，聚焦项的轮廓颜色。活动的列表/树具有键盘焦点，非活动的列表/树没有。
      'list.focusOutline': '#ffffff12',
      // 当列表/树处于活动状态且已选中时，聚焦项的轮廓颜色。活动的列表/树具有键盘焦点，非活动的列表/树没有。
      'list.focusAndSelectionOutline': '',
      // 在列表/树内搜索时，匹配项的前景颜色高亮。
      'list.highlightForeground': this.v('primary'),
      // 使用鼠标悬停在项目上时，列表/树的背景。
      'list.hoverBackground': this.v('activeBackground'),
      // 使用鼠标悬停在项目上时，列表/树的前景。
      'list.hoverForeground': this.v('foreground'),
      // 当列表/树处于非活动状态时，所选项的背景颜色。
      'list.inactiveSelectionBackground': this.v('activeBackground'),
      // 当列表/树处于非活动状态时，所选项的前景颜色。活动的列表/树具有键盘焦点，非活动的列表/树没有。
      'list.inactiveSelectionForeground': this.v('foreground'),
      // 当列表/树处于非活动状态时，所选项的图标前景颜色。活动的列表/树具有键盘焦点，非活动的列表/树没有。
      'list.inactiveSelectionIconForeground': '',
      // 当列表处于非活动状态时，聚焦项的背景颜色。活动的列表具有键盘焦点，非活动的列表没有。目前仅支持列表。
      'list.inactiveFocusBackground': this.v('background'),
      // 当列表/树处于非活动状态时，聚焦项的轮廓颜色。活动的列表/树具有键盘焦点，非活动的列表/树没有。
      'list.inactiveFocusOutline': '',
      // 无效项的列表/树前景颜色，例如资源管理器中的未解析的根目录。
      'list.invalidItemForeground': '',
      // 列表项中包含错误的前景颜色。
      'list.errorForeground': '',
      // 列表项中包含警告的前景颜色。
      'list.warningForeground': '',
      // 在列表/树内搜索时，类型过滤器的背景颜色。
      'listFilterWidget.background': '',
      // 在列表/树内搜索时，类型过滤器的轮廓颜色。
      'listFilterWidget.outline': '',
      // 在列表/树内搜索时，未找到匹配项的类型过滤器的轮廓颜色。
      'listFilterWidget.noMatchesOutline': '',
      // 当列表/树内搜索时，类型过滤器的阴影颜色。
      'listFilterWidget.shadow': '',
      // 在列表/树中过滤的匹配项的背景颜色。
      'list.filterMatchBackground': '#66b39530',
      // 在列表/树中过滤的匹配项的边框颜色。
      'list.filterMatchBorder': '#66b395',
      // 对于被弱化的列表/树项，列表/树的前景颜色。
      'list.deemphasizedForeground': '',
      // 树小部件的缩进指南线条颜色。
      'tree.indentGuidesStroke': this.pick({
        light: this.palette.gray[2],
        dark: this.palette.gray[1],
      }),
      // 对于非活动的缩进指南，树的缩进指南线条颜色。
      'tree.inactiveIndentGuidesStroke': '',
      // 树的缩进指南线条颜色。
      'tree.tableColumnsBorder': '',
      // 奇数行的表格背景颜色。
      'tree.tableOddRowsBackground': '',
    })
  }

  /**
   * Activity Bar
   * The Activity Bar is displayed either on the far left or right of the workbench and allows fast switching between views of the Side Bar.
   * @url https://code.visualstudio.com/api/references/theme-color#activity-bar
   */
  registerActivityBar() {
    return this.addColors<VSCodeColor.ActivityBar>({

      // 活动栏项的拖放反馈颜色。活动栏显示在最左侧或最右侧，用于在侧边栏的视图之间进行切换。
      'activityBar.dropBorder': '',
      // 活动栏的前景颜色（例如用于图标）。
      'activityBar.foreground': this.v('foreground'),
      // 当活动栏项处于非活动状态时，活动栏项的前景颜色。
      'activityBar.inactiveForeground': this.v('ignored'),
      // 活动栏与侧边栏之间的边框颜色。
      'activityBar.border': this.v('border'), // 活动栏与侧栏的边框颜色。
      // 活动通知徽章的背景颜色。
      'activityBarBadge.background': this.v('activeForeground'),
      // 活动通知徽章的前景颜色。
      'activityBarBadge.foreground': this.v('background'),
      // 活动栏活动指示器的边框颜色。
      'activityBar.activeBorder': this.v('primary'), // Activity Bar 活动指示器边框颜色
      // 活动元素的背景颜色。
      'activityBar.activeBackground': '',
      // 活动栏焦点边框颜色，用于活动项。
      'activityBar.activeFocusBorder': '',
      // 活动栏的背景颜色。
      'activityBar.background': this.v('background'),

    })
  }

  /**
   * Profiles
   * @url https://code.visualstudio.com/api/references/theme-color#profiles
   */
  registerProfiles() {
    return this.addColors<VSCodeColor.Profiles>({
      // 配置徽章的背景颜色。配置徽章显示在活动栏中的设置齿轮图标顶部。
      'profileBadge.background': '',
      // 配置徽章的前景颜色。配置徽章显示在活动栏中的设置齿轮图标顶部。
      'profileBadge.foreground': '',
    })
  }

  /**
   * Side Bar
   * The Side Bar contains views like the Explorer and Search.
   * @url https://code.visualstudio.com/api/references/theme-color#side-bar
   */
  registerSideBar() {
    return this.addColors<VSCodeColor.SideBar>({
      // 侧边栏的背景颜色。
      'sideBar.background': this.v('background'),
      // 侧边栏的前景颜色。侧边栏是包含资源管理器和搜索等视图的容器。
      'sideBar.foreground': this.v('activeForeground'),
      // 侧边栏与编辑器之间的边框颜色。
      'sideBar.border': this.v('border'),
      // 侧边栏部分的拖放反馈颜色。颜色应该有透明度，以便侧边栏部分仍然可以透出来。
      'sideBar.dropBackground': '',
      // 侧边栏标题的前景颜色。
      'sideBarTitle.foreground': this.v('foreground'),
      // 侧边栏部分标题的背景颜色。
      'sideBarSectionHeader.background': this.v('background'),
      // 侧边栏部分标题的前景颜色。
      'sideBarSectionHeader.foreground': this.v('foreground'),
      // 侧边栏部分标题的边框颜色。
      'sideBarSectionHeader.border': this.v('border'),

    })
  }

  /**
   * Minimap
   * The Minimap shows a minified version of the current file.
   * @url https://code.visualstudio.com/api/references/theme-color#minimap
   */
  registerMinimap() {
    return this.addColors<VSCodeColor.Minimap>({
      // 在文件中搜索的匹配项的高亮颜色。
      'minimap.findMatchHighlight': '#66b3959f',
      // 编辑器选择的高亮颜色。
      'minimap.selectionHighlight': '#7098d49f',
      // 编辑器内错误的高亮颜色。
      'minimap.errorHighlight': '#ff8787',
      // 编辑器内警告的高亮颜色。
      'minimap.warningHighlight': '',
      // 迷你地图的背景颜色。
      'minimap.background': '#292929',
      // 重复的编辑器选择的迷你地图标记颜色。
      'minimap.selectionOccurrenceHighlight': '',
      // 在迷你地图中呈现的前景元素的不透明度。例如，"#000000c0"将以75%的不透明度呈现元素。
      'minimap.foregroundOpacity': '',
      // 迷你地图中用于信息的标记颜色。
      'minimap.infoHighlight': '',

      // 迷你地图滑块的背景颜色。
      'minimapSlider.background': '#ffffff12',
      // 当悬停时，迷你地图滑块的背景颜色。
      'minimapSlider.hoverBackground': '#ffffff2f',
      // 点击时，迷你地图滑块的背景颜色。
      'minimapSlider.activeBackground': '#ffffff3f',

      // 添加内容的迷你地图边栏颜色。
      'minimapGutter.addedBackground': '',
      // 修改内容的迷你地图边栏颜色。
      'minimapGutter.modifiedBackground': '',
      // 删除内容的迷你地图边栏颜色。
      'minimapGutter.deletedBackground': '',
    })
  }

  /**
   * Editor Groups & Tabs
   * Editor Groups are the containers of editors. There can be many editor groups. A Tab is the container of an editor. Multiple Tabs can be opened in one editor group.
   * @url https://code.visualstudio.com/api/references/theme-color#editor-groups-tabs
   */
  registerEditGroupsAndTabs() {
    return this.addColors<VSCodeColor.EditGroupsAndTabs>({

      'tab.activeForeground': this.v('foreground'),
      'tab.inactiveForeground': this.palette.gray[5],
      'tab.inactiveBackground': this.v('background'),
      'tab.activeBackground': this.v('background'),
      'tab.hoverBackground': this.v('activeBackground'),
      'tab.unfocusedHoverBackground': this.v('background'),
      'tab.border': this.v('border'),
      'tab.unfocusedActiveBorderTop': this.v('border'),
      'tab.activeBorder': this.v('border'),
      'tab.unfocusedActiveBorder': this.v('border'),
      'tab.activeBorderTop': this.v('secondaryForeground'),

      // 拖动编辑器时的背景颜色。
      'editorGroup.dropBackground': '',
      // 分隔多个编辑器组的颜色。
      'editorGroup.border': this.v('border'),
      // 使用单个选项卡时，编辑器组标题头的背景颜色（设置为 `"workbench.editor.showTabs": "single"`）。
      'editorGroupHeader.noTabsBackground': '',
      // 标签容器的背景颜色。
      'editorGroupHeader.tabsBackground': this.v('background'),
      // 启用选项卡时，在编辑器选项卡控件下方的边框颜色。
      'editorGroupHeader.tabsBorder': this.v('border'),
      // 编辑器组标题头和编辑器之间的边框颜色（如果启用面包屑，则在面包屑下方）。
      'editorGroupHeader.border': '',
      // 空编辑器组的背景颜色。
      'editorGroup.emptyBackground': '',
      // 聚焦的空编辑器组的边框颜色。
      'editorGroup.focusedEmptyBorder': '',
      // 拖动文件时在编辑器上方显示的文本的前景颜色。此文本通知用户他们可以按住 Shift 键将文件拖放到编辑器中。
      'editorGroup.dropIntoPromptForeground': '',
      // 拖动文件时在编辑器上方显示的文本的背景颜色。此文本通知用户他们可以按住 Shift 键将文件拖放到编辑器中。
      'editorGroup.dropIntoPromptBackground': '',
      // 拖动文件时在编辑器上方显示的文本的边框颜色。此文本通知用户他们可以按住 Shift 键将文件拖放到编辑器中。
      'editorGroup.dropIntoPromptBorder': '',
      // 非活动编辑器组中活动标签的背景颜色。
      'tab.unfocusedActiveBackground': '',
      // 用于分隔最后一个固定编辑器与非固定编辑器的右侧边框。
      'tab.lastPinnedBorder': '',
      // 非活动编辑器组中非活动选项卡的背景颜色。
      'tab.unfocusedInactiveBackground': '',
      // 非活动编辑器组中活动选项卡的前景颜色。
      'tab.unfocusedActiveForeground': '',
      // 非活动编辑器组中非活动选项卡的前景颜色。
      'tab.unfocusedInactiveForeground': '',
      // 悬停时的选项卡前景颜色。
      'tab.hoverForeground': '',
      // 非活动编辑器组中悬停时的选项卡前景颜色。
      'tab.unfocusedHoverForeground': '',
      // 悬停时用于突出显示选项卡的边框。
      'tab.hoverBorder': '',
      // 非活动编辑器组中悬停时用于突出显示选项卡的边框。
      'tab.unfocusedHoverBorder': '',
      // 活动组中已修改（脏）活动选项卡顶部的边框。
      'tab.activeModifiedBorder': '',
      // 活动组中已修改（脏）非活动选项卡顶部的边框。
      'tab.inactiveModifiedBorder': '',
      // 非活动编辑器组中已修改（脏）活动选项卡顶部的边框。
      'tab.unfocusedActiveModifiedBorder': '',
      // 非活动编辑器组中已修改（脏）非活动选项卡顶部的边框。
      'tab.unfocusedInactiveModifiedBorder': '',
      // 在编辑器布局的左侧和右侧可见的编辑器窗格的背景颜色。
      'editorPane.background': '',
      // 当在编辑器组中水平排列时，用于将两个编辑器从上到下分开的颜色。
      'sideBySideEditor.horizontalBorder': '',
      // 当在编辑器组中水平排列时，用于将两个编辑器从左到右分开的颜色。
      'sideBySideEditor.verticalBorder': '',

    })
  }

  /**
   * Editor Color
   * Colors for the editor such as gutter background.
   * @url https://code.visualstudio.com/api/references/theme-color#editor-colors
   */
  registerEditorColors() {
    return this.addColors<VSCodeColor.EditorColors>({
      'editor.foreground': this.v('foreground'),
      'editor.background': this.v('background'),
      'editor.foldBackground': this.pick({ light: '#22222210', dark: '#eeeeee10' }),
      'editor.lineHighlightBackground': this.v('activeBackground'),
      'editorLineNumber.foreground': this.v('ignored'),
      'editorLineNumber.activeForeground': this.v('activeForeground'),
      'editorIndentGuide.background': this.pick({
        light: '#00000015',
        dark: '#ffffff15',
      }),
      'editorIndentGuide.activeBackground': this.pick({
        light: '#00000030',
        dark: '#ffffff30',
      }),
      'editorWhitespace.foreground': this.pick({
        light: '#00000015',
        dark: '#ffffff15',
      }),
      // 'editorCursor.foreground': this.v('primary'),

      'editor.findMatchBackground': this.pick({
        light: '#e6cc7744',
        dark: '#e6cc7722',
      }),
      'editor.findMatchHighlightBackground': this.pick({
        light: '#e6cc7766',
        dark: '#e6cc7744',
      }),
      'editor.inactiveSelectionBackground': this.v('selectionBackgroundInActive'),
      'editor.selectionBackground': this.v('selectionBackground'),
      'editor.selectionHighlightBackground': this.v('selectionBackgroundInActive'),
      'editor.wordHighlightBackground': this.pick({
        light: '#1c6b4805',
        dark: '#1c6b4805',
      }),
      'editor.wordHighlightStrongBackground': this.pick({
        light: '#1c6b4810',
        dark: '#1c6b4810',
      }),

      'editorCursor.foreground': '#ff8787',
      'editor.selectionHighlightBorder': '#ffffff3f',
      'editor.findMatchHighlightBorder': '#66b3955f',
      'editor.findMatchBorder': '#66b395',
      'searchEditor.findMatchBorder': '#66b395',
      'editor.hoverHighlightBackground': '#ffffff10',
      'editorLink.activeForeground': '#ff8787',
      'editorInlayHint.foreground': this.v('punctuation'),
      'editorInlayHint.background': '#00000000',
      'editorBracketMatch.background': this.pick({
        light: '#1c6b4820',
        dark: '#4d937520',
      }),
      'editorHint.foreground': this.v('green'),
      'editorOverviewRuler.border': this.palette.white,
      'problemsErrorIcon.foreground': this.v('red'),
      'problemsWarningIcon.foreground': this.v('orange'),
      'problemsInfoIcon.foreground': this.v('blue'),

      // 当 editor.renderFinalNewline 设置为 dimmed 时，编辑器最后一行的颜色。
      'editorLineNumber.dimmedForeground': '',
      // 编辑器光标的背景颜色。允许自定义块光标重叠的字符的颜色。
      'editorCursor.background': '',
      // 高对比度下所选文本的颜色。
      'editor.selectionForeground': '',
      // 在读取访问期间符号的边框颜色，例如读取变量。
      'editor.wordHighlightBorder': '',
      // 在写入访问期间符号的边框颜色，例如写入变量。
      'editor.wordHighlightStrongBorder': '',
      // 文本出现的符号的背景颜色。颜色不能是不透明的，以免隐藏底层装饰。
      'editor.wordHighlightTextBackground': '',
      // 文本出现的符号的边框颜色。
      'editor.wordHighlightTextBorder': '',

      /* Find matches */

      // 限制搜索范围的颜色（在查找小部件中启用“在选择中查找”）。颜色不能是不透明的，以免隐藏底层装饰。
      'editor.findRangeHighlightBackground': '',
      // 限制搜索范围的边框颜色（在查找小部件中启用“在选择中查找”）。
      'editor.findRangeHighlightBorder': '',

      /* Search Results */
      // 搜索视图中完成消息的文本颜色。例如，此颜色用于显示“{x} 个结果在 {y} 个文件中”的文本。
      'search.resultsInfoForeground': '',

      /* Search Editor Matches */
      // 搜索编辑器结果的背景颜色。
      'searchEditor.findMatchBackground': '',

      // 搜索编辑器文本输入框的边框颜色。
      'searchEditor.textInputBorder': '',

      /* Hover Highlight */

      /* Line Highlight */
      // 光标位置所在行周围边框的背景颜色。
      'editor.lineHighlightBorder': '',

      // 用于突出显示 Unicode 字符的边框颜色。
      'editorUnicodeHighlight.border': '',
      // 用于突出显示 Unicode 字符的背景颜色。
      'editorUnicodeHighlight.background': '',

      // 高亮范围的背景颜色，用于快速打开、文件中的符号和查找功能。颜色不能是不透明的，以免隐藏底层装饰。
      'editor.rangeHighlightBackground': '',
      // 高亮范围周围边框的背景颜色。
      'editor.rangeHighlightBorder': '',

      // 高亮符号的背景颜色。颜色不能是不透明的，以免隐藏底层装饰。
      'editor.symbolHighlightBackground': '',
      // 高亮符号周围边框的背景颜色。
      'editor.symbolHighlightBorder': '',
      // 编辑器缩进指南的颜色 (1)。
      'editorIndentGuide.background1': '',
      // 编辑器缩进指南的颜色 (2)。
      'editorIndentGuide.background2': '',
      // 编辑器缩进指南的颜色 (3)。
      'editorIndentGuide.background3': '',
      // 编辑器缩进指南的颜色 (4)。
      'editorIndentGuide.background4': '',
      // 编辑器缩进指南的颜色 (5)。
      'editorIndentGuide.background5': '',
      // 编辑器缩进指南的颜色 (6)。
      'editorIndentGuide.background6': '',
      // 活动编辑器缩进指南的颜色 (1)。
      'editorIndentGuide.activeBackground1': '',
      // 活动编辑器缩进指南的颜色 (2)。
      'editorIndentGuide.activeBackground2': '',
      // 活动编辑器缩进指南的颜色 (3)。
      'editorIndentGuide.activeBackground3': '',
      // 活动编辑器缩进指南的颜色 (4)。
      'editorIndentGuide.activeBackground4': '',
      // 活动编辑器缩进指南的颜色 (5)。
      'editorIndentGuide.activeBackground5': '',
      // 活动编辑器缩进指南的颜色 (6)。
      'editorIndentGuide.activeBackground6': '',

      // 类型内联提示的前景颜色。
      'editorInlayHint.typeForeground': '',
      // 类型内联提示的背景颜色。
      'editorInlayHint.typeBackground': '',
      // 参数内联提示的前景颜色。
      'editorInlayHint.parameterForeground': '',
      // 参数内联提示的背景颜色。
      'editorInlayHint.parameterBackground': '',

      // 编辑器标尺的颜色。
      'editorRuler.foreground': '',
      // 编辑器处于链接编辑模式时的背景颜色。
      'editor.linkedEditingBackground': '',

      // 编辑器 CodeLens 的前景颜色。
      'editorCodeLens.foreground': '#666666',
      // 用于灯泡操作图标的颜色。
      'editorLightBulb.foreground': '',
      // 用于灯泡自动修复操作图标的颜色。
      'editorLightBulbAutoFix.foreground': '',
      // 用于灯泡 AI 图标的颜色。
      'editorLightBulbAi.foreground': '',

      // 匹配括号框的颜色。
      'editorBracketMatch.border': '',

      // 括号（1）的前景颜色。需要启用括号对颜色标记。
      'editorBracketHighlight.foreground1': this.v('cyan'),
      // 括号（2）的前景颜色。需要启用括号对颜色标记。
      'editorBracketHighlight.foreground2': this.v('green'),
      // 括号（3）的前景颜色。需要启用括号对颜色标记。
      'editorBracketHighlight.foreground3': this.v('orange'),
      // 括号（4）的前景颜色。需要启用括号对颜色标记。
      'editorBracketHighlight.foreground4': this.v('magenta'),
      // 括号（5）的前景颜色。需要启用括号对颜色标记。
      'editorBracketHighlight.foreground5': this.v('yellow'),
      // 括号（6）的前景颜色。需要启用括号对颜色标记。
      'editorBracketHighlight.foreground6': this.v('blue'),
      // 未预期的括号的前景颜色。
      'editorBracketHighlight.unexpectedBracket.foreground': '',

      // 活动括号对指南的背景颜色 (1)。需要启用括号对指南。
      'editorBracketPairGuide.activeBackground1': '',
      // 活动括号对指南的背景颜色 (2)。需要启用括号对指南。
      'editorBracketPairGuide.activeBackground2': '',
      // 活动括号对指南的背景颜色 (3)。需要启用括号对指南。
      'editorBracketPairGuide.activeBackground3': '',
      // 活动括号对指南的背景颜色 (4)。需要启用括号对指南。
      'editorBracketPairGuide.activeBackground4': '',
      // 活动括号对指南的背景颜色 (5)。需要启用括号对指南。
      'editorBracketPairGuide.activeBackground5': '',
      // 活动括号对指南的背景颜色 (6)。需要启用括号对指南。
      'editorBracketPairGuide.activeBackground6': '',
      // 非活动括号对指南的背景颜色 (1)。需要启用括号对指南。
      'editorBracketPairGuide.background1': '',
      // 非活动括号对指南的背景颜色 (2)。需要启用括号对指南。
      'editorBracketPairGuide.background2': '',
      // 非活动括号对指南的背景颜色 (3)。需要启用括号对指南。
      'editorBracketPairGuide.background3': '',
      // 非活动括号对指南的背景颜色 (4)。需要启用括号对指南。
      'editorBracketPairGuide.background4': '',
      // 非活动括号对指南的背景颜色 (5)。需要启用括号对指南。
      'editorBracketPairGuide.background5': '',
      // 非活动括号对指南的背景颜色 (6)。需要启用括号对指南。
      'editorBracketPairGuide.background6': '',

      // 编辑器概览标尺的背景颜色。仅在启用缩略图并将其放置在编辑器右侧时使用。
      'editorOverviewRuler.background': '',
      // 查找匹配项的概览标尺标记颜色。颜色不能是不透明的，以免隐藏底层装饰。
      'editorOverviewRuler.findMatchForeground': '',
      // 被突出显示的范围的概览标尺标记颜色，例如快速打开、文件中的符号和查找功能。颜色不能是不透明的，以免隐藏底层装饰。
      'editorOverviewRuler.rangeHighlightForeground': '',
      // 选择突出显示的概览标尺标记颜色。颜色不能是不透明的，以免隐藏底层装饰。
      'editorOverviewRuler.selectionHighlightForeground': '',
      // 符号突出显示的概览标尺标记颜色。颜色不能是不透明的，以免隐藏底层装饰。
      'editorOverviewRuler.wordHighlightForeground': '',
      // 写访问符号突出显示的概览标尺标记颜色。颜色不能是不透明的，以免隐藏底层装饰。
      'editorOverviewRuler.wordHighlightStrongForeground': '',
      // 文本出现的概览标尺标记颜色。颜色不能是不透明的，以免隐藏底层装饰。
      'editorOverviewRuler.wordHighlightTextForeground': '',
      // 修改内容的概览标尺标记颜色。
      'editorOverviewRuler.modifiedForeground': '',
      // 添加的内容的概览标尺标记颜色。
      'editorOverviewRuler.addedForeground': '',
      // 删除的内容的概览标尺标记颜色。
      'editorOverviewRuler.deletedForeground': '',
      // 错误的概览标尺标记颜色。
      'editorOverviewRuler.errorForeground': '',
      // 警告的概览标尺标记颜色。
      'editorOverviewRuler.warningForeground': '',
      // 信息的概览标尺标记颜色。
      'editorOverviewRuler.infoForeground': '',
      // 匹配括号的概览标尺标记颜色。
      'editorOverviewRuler.bracketMatchForeground': '',
      // 编辑器中错误下划线的前景色。
      'editorError.foreground': this.v('red'),
      // 编辑器中错误框的边框颜色。
      'editorError.border': '',
      // 编辑器中错误文本的背景颜色。颜色不能是不透明的，以免隐藏底层装饰。
      'editorError.background': '',
      // 编辑器中警告下划线的前景色。
      'editorWarning.foreground': this.v('orange'),
      // 编辑器中警告框的边框颜色。
      'editorWarning.border': '',
      // 编辑器中警告文本的背景颜色。颜色不能是不透明的，以免隐藏底层装饰。
      'editorWarning.background': '',
      // 编辑器中信息下划线的前景色。
      'editorInfo.foreground': this.v('blue'),
      // 编辑器中信息框的边框颜色。
      'editorInfo.border': '',
      // 编辑器中信息文本的背景颜色。颜色不能是不透明的，以免隐藏底层装饰。
      'editorInfo.background': '',
      // 编辑器中提示框的边框颜色。
      'editorHint.border': '',

      // 不必要（未使用）源代码的边框颜色。
      'editorUnnecessaryCode.border': '',
      // 不必要（未使用）源代码的不透明度。例如，"#000000c0" 将以75%的不透明度渲染代码。对于高对比度主题，请使用 "editorUnnecessaryCode.border" 主题颜色来下划线不必要的代码，而不是使其变暗。
      'editorUnnecessaryCode.opacity': '',
      // 编辑器装订线的背景颜色。装订线包含了行号和行号外边距。
      'editorGutter.background': '',
      // 修改的行的编辑器装订线背景颜色。
      'editorGutter.modifiedBackground': this.v('blue'),
      // 添加的行的编辑器装订线背景颜色。
      'editorGutter.addedBackground': this.v('green'),
      // 删除的行的编辑器装订线背景颜色。
      'editorGutter.deletedBackground': this.v('red'),
      // 用于注释范围的编辑器装订线装饰颜色。
      'editorGutter.commentRangeForeground': this.v('ignored'),
      // 用于注释标记的编辑器装订线装饰颜色。
      'editorGutter.commentGlyphForeground': '',
      // 用于未解决注释线程的注释标记的编辑器装订线装饰颜色。
      'editorGutter.commentUnresolvedGlyphForeground': '',
      // 编辑器装订线中折叠控件的颜色。
      'editorGutter.foldingControlForeground': this.v('secondaryForeground'),

      // 已解决评论的边框颜色和箭头颜色。
      'editorCommentsWidget.resolvedBorder': '',
      // 未解决评论的边框颜色和箭头颜色。
      'editorCommentsWidget.unresolvedBorder': '',
      // 评论范围的背景颜色。
      'editorCommentsWidget.rangeBackground': '',
      // 当前选择或悬停的评论范围的背景颜色。
      'editorCommentsWidget.rangeActiveBackground': '',
      // 评论回复输入框的背景颜色。
      'editorCommentsWidget.replyInputBackground': '',
    })
  }

  /**
   * Diff editor colors
   * @url https://code.visualstudio.com/api/references/theme-color#diff-editor-colors
   */
  registerDiffEditorColors() {
    return this.addColors<VSCodeColor.DiffEditorColors>({

      // 插入的文本的背景颜色。颜色不能是不透明的，以免隐藏底层装饰。
      'diffEditor.insertedTextBackground': this.pick({
        light: '#1c6b4815',
        dark: '#4d937522',
      }),
      'diffEditor.removedTextBackground': this.pick({
        light: '#ab595910',
        dark: '#ab595922',
      }),
      'diffEditor.border': '#ffffff12',
      'diffEditor.diagonalFill': '#ffffff12',
      'diffEditor.insertedLineBackground': '#66b39530',
      'diffEditor.removedLineBackground': '#ff878730',

      // 插入的文本的轮廓颜色。
      'diffEditor.insertedTextBorder': '',
      // 删除的文本的轮廓颜色。
      'diffEditor.removedTextBorder': '',
      // 插入行的边距背景颜色。
      'diffEditorGutter.insertedLineBackground': '',
      // 删除行的边距背景颜色。
      'diffEditorGutter.removedLineBackground': '',
      // 差异概览标尺中插入内容的颜色。
      'diffEditorOverview.insertedForeground': '',
      // 差异概览标尺中删除内容的颜色。
      'diffEditorOverview.removedForeground': '',
      // 差异编辑器中未更改块的颜色。
      'diffEditor.unchangedRegionBackground': '',
      // 差异编辑器中未更改块的前景色。
      'diffEditor.unchangedRegionForeground': '',
      // 差异编辑器中未更改区域小部件周围的阴影颜色。
      'diffEditor.unchangedRegionShadow': '',
      // 差异编辑器中未更改代码的背景颜色。
      'diffEditor.unchangedCodeBackground': '',
      // 差异编辑器中移动的文本的边框颜色。
      'diffEditor.move.border': '',
      // 差异编辑器中移动的文本的活动边框颜色。
      'diffEditor.moveActive.border': '',
      // 多重差异编辑器的标题背景颜色。
      'multiDiffEditor.headerBackground': '',
    })
  }

  /**
   * Editor widget colors
   * @url https://code.visualstudio.com/api/references/theme-color#editor-widget-colors
   */
  registerEditorWidgetColors() {
    return this.addColors<VSCodeColor.EditorWidgetColors>({
      'editorWidget.background': this.v('background'),
      'editorSuggestWidget.background': '#202020',
      'editorSuggestWidget.selectedBackground': '#333333',
      'editorStickyScroll.background': this.v('activeBackground'),
      'editorStickyScrollHover.background': this.v('activeBackground'),

      // 编辑器小部件（例如查找/替换）的前景色。
      'editorWidget.foreground': '',
      // 编辑器小部件（除非小部件不包含边框或定义自己的边框颜色）的边框颜色。
      'editorWidget.border': '',
      // 编辑器小部件调整大小边框的颜色。仅当小部件选择具有调整大小边框并且颜色未被小部件覆盖时，才使用此颜色。
      'editorWidget.resizeBorder': '',

      // 建议小部件的边框颜色。
      'editorSuggestWidget.border': '',
      // 建议小部件的前景色。
      'editorSuggestWidget.foreground': '',
      // 当建议项被聚焦时，建议小部件中匹配高亮的颜色。
      'editorSuggestWidget.focusHighlightForeground': '',
      // 建议小部件中匹配高亮的颜色。
      'editorSuggestWidget.highlightForeground': '',
      // 建议小部件中选定条目的前景色。
      'editorSuggestWidget.selectedForeground': '',
      // 建议小部件中选定条目的图标前景色。
      'editorSuggestWidget.selectedIconForeground': '',
      // 建议小部件状态的前景色。
      'editorSuggestWidgetStatus.foreground': '',

      // 编辑器悬停的前景色。
      'editorHoverWidget.foreground': '',
      // 编辑器悬停的背景颜色。
      'editorHoverWidget.background': '',
      // 编辑器悬停的边框颜色。
      'editorHoverWidget.border': '',
      // 参数提示中活动项的前景色。
      'editorHoverWidget.highlightForeground': '',
      // 编辑器悬停状态栏的背景颜色。
      'editorHoverWidget.statusBarBackground': '',

      // 内联完成提供程序和建议预览显示的幽灵文本的边框颜色。
      'editorGhostText.border': '',
      // 编辑器中幽灵文本的背景颜色。
      'editorGhostText.background': '',
      // 内联完成提供程序和建议预览显示的幽灵文本的前景色。
      'editorGhostText.foreground': '',

      // 异常小部件的背景颜色。
      'debugExceptionWidget.background': '',
      // 异常小部件的边框颜色。
      'debugExceptionWidget.border': '',
      // 编辑器标记导航小部件的背景颜色。
      'editorMarkerNavigation.background': '',
      // 编辑器标记导航小部件错误颜色。
      'editorMarkerNavigationError.background': '',
      // 编辑器标记导航小部件警告颜色。
      'editorMarkerNavigationWarning.background': '',
      // 编辑器标记导航小部件信息颜色。
      'editorMarkerNavigationInfo.background': '',
      // 编辑器标记导航小部件错误标题背景颜色。
      'editorMarkerNavigationError.headerBackground': '',
      // 编辑器标记导航小部件警告标题背景颜色。
      'editorMarkerNavigationWarning.headerBackground': '',
      // 编辑器标记导航小部件信息标题背景颜色。
      'editorMarkerNavigationInfo.headerBackground': '',
    })
  }

  /**
   * Peek view colors
   * @url https://code.visualstudio.com/api/references/theme-color#peek-view-colors
   */
  registerPeekViewColors() {
    return this.addColors<VSCodeColor.PeekViewColors>({
      // peek 视图编辑器中匹配高亮的背景颜色。
      'peekViewEditor.matchHighlightBackground': this.pick({ dark: '#ffd33d33' }),
      // peek 视图结果列表中匹配高亮的背景颜色。
      'peekViewResult.matchHighlightBackground': this.pick({ dark: '#ffd33d33' }),
      // peek 视图编辑器的背景颜色。
      'peekViewEditor.background': this.v('background'),
      'peekViewResult.background': this.v('background'),
      'peekView.border': '#666666',
      'peekViewEditor.matchHighlightBorder': '#66b395',
      'peekViewResult.selectionBackground': '#66b3953f',
      'peekViewTitle.background': '#333333',

      // peek 视图编辑器中 gutter 的背景颜色。
      'peekViewEditorGutter.background': '',
      // peek 视图编辑器中粘性滚动的背景颜色。
      'peekViewEditorStickyScroll.background': '',
      // peek 视图结果列表中文件节点的前景色。
      'peekViewResult.fileForeground': '',
      // peek 视图结果列表中行节点的前景色。
      'peekViewResult.lineForeground': '',
      // peek 视图结果列表中选定条目的前景色。
      'peekViewResult.selectionForeground': '',
      // peek 视图标题信息的前景色。
      'peekViewTitleDescription.foreground': '',
      // peek 视图标题的前景色。
      'peekViewTitleLabel.foreground': '',
    })
  }

  /**
   * Merge conflicts colors
   * @url https://code.visualstudio.com/api/references/theme-color#merge-conflicts-colors
   */
  registerMergeConflictsColors() {
    return this.addColors<VSCodeColor.MergeConflictsColors>({
      // 冲突解决中当前头部的背景颜色。颜色不能是不透明的，以免隐藏底层装饰。
      'merge.currentHeaderBackground': '#66b3957f',
      // 冲突解决中当前内容的背景颜色。颜色不能是不透明的，以免隐藏底层装饰。
      'merge.currentContentBackground': '#66b3953f',
      // 冲突解决中传入头部的背景颜色。颜色不能是不透明的，以免隐藏底层装饰。
      'merge.incomingHeaderBackground': '#7098d47f',
      // 冲突解决中传入内容的背景颜色。颜色不能是不透明的，以免隐藏底层装饰。
      'merge.incomingContentBackground': '#7098d43f',

      // 冲突解决中头部和分割线的边框颜色。
      'merge.border': '',
      // 冲突解决中共同祖先内容的背景颜色。颜色不能是不透明的，以免隐藏底层装饰。
      'merge.commonContentBackground': '',
      // 冲突解决中共同祖先头部的背景颜色。颜色不能是不透明的，以免隐藏底层装饰。
      'merge.commonHeaderBackground': '',
      // 冲突解决中当前概览标尺的前景色。
      'editorOverviewRuler.currentContentForeground': '',
      // 冲突解决中传入概览标尺的前景色。
      'editorOverviewRuler.incomingContentForeground': '',
      // 冲突解决中共同祖先概览标尺的前景色。
      'editorOverviewRuler.commonContentForeground': '',
      // 已解决评论的编辑器概览标尺装饰颜色。该颜色应该是不透明的。
      'editorOverviewRuler.commentForeground': '',
      // 未解决评论的编辑器概览标尺装饰颜色。该颜色应该是不透明的。
      'editorOverviewRuler.commentUnresolvedForeground': '',
      // 变化的背景颜色。
      'mergeEditor.change.background': '',
      // 单词变化的背景颜色。
      'mergeEditor.change.word.background': '',
      // 未处理的未聚焦冲突的边框颜色。
      'mergeEditor.conflict.unhandledUnfocused.border': '',
      // 未处理的聚焦冲突的边框颜色。
      'mergeEditor.conflict.unhandledFocused.border': '',
      // 处理中的未聚焦冲突的边框颜色。
      'mergeEditor.conflict.handledUnfocused.border': '',
      // 处理中的聚焦冲突的边框颜色。
      'mergeEditor.conflict.handledFocused.border': '',
      // 处理中的概览标尺装饰颜色（输入1）。
      'mergeEditor.conflict.handled.minimapOverViewRuler': '',
      // 未处理的概览标尺装饰颜色（输入1）。
      'mergeEditor.conflict.unhandled.minimapOverViewRuler': '',
      // "冲突行"文本的背景颜色。
      'mergeEditor.conflictingLines.background': '',
      // 基础中变化的背景颜色。
      'mergeEditor.changeBase.background': '',
      // 基础中单词变化的背景颜色。
      'mergeEditor.changeBase.word.background': '',
      // 输入1的装饰背景颜色。
      'mergeEditor.conflict.input1.background': '',
      // 输入2的装饰背景颜色。
      'mergeEditor.conflict.input2.background': '',
    })
  }

  /**
   * Panel colors
   * @url https://code.visualstudio.com/api/references/theme-color#panel-colors
   */
  registerPanelColors() {
    return this.addColors<VSCodeColor.PanelColors>({
      // 面板的背景颜色。
      'panel.background': this.v('background'),
      // 用于将面板与编辑器分隔开的面板边框颜色。
      'panel.border': this.v('border'),
      // 活动面板标题的边框颜色。
      'panelTitle.activeBorder': this.v('primary'),
      // 活动面板的标题颜色。
      'panelTitle.activeForeground': this.v('foreground'),
      // 非活动面板的标题颜色。
      'panelTitle.inactiveForeground': this.palette.gray[5],
      // 面板中输入框的边框颜色。
      'panelInput.border': this.pick({
        light: this.palette.gray[2],
        dark: this.palette.gray[1],
      }),

      // 面板标题的拖放反馈颜色。面板显示在编辑器区域下方，包含输出和集成终端等视图。
      'panel.dropBorder': '',
      // 在面板中水平堆叠多个视图时使用的面板部分边框颜色。面板显示在编辑器区域下方，包含输出和集成终端等视图。
      'panelSection.border': '',
      // 面板部分的拖放反馈颜色。颜色应该有透明度，以便面板部分仍然可以显示。面板显示在编辑器区域下方，包含输出和集成终端等视图。
      'panelSection.dropBackground': '',
      // 面板部分标题的背景颜色。面板显示在编辑器区域下方，包含输出和集成终端等视图。
      'panelSectionHeader.background': '',
      // 面板部分标题的前景色。面板显示在编辑器区域下方，包含输出和集成终端等视图。
      'panelSectionHeader.foreground': '',
      // 在面板中垂直堆叠多个视图时使用的面板部分标题边框颜色。面板显示在编辑器区域下方，包含输出和集成终端等视图。
      'panelSectionHeader.border': '',
    })
  }

  /**
   * Status bar colors
   * @url https://code.visualstudio.com/api/references/theme-color#status-bar-colors
   */
  registerStatusBarColors() {
    return this.addColors<VSCodeColor.StatusBarColors>({

      // 状态栏的前景色。
      'statusBar.foreground': this.v('activeForeground'),
      // 标准状态栏的背景颜色。
      'statusBar.background': this.v('background'),
      // 分隔状态栏和编辑器的状态栏边框颜色。
      'statusBar.border': this.v('border'),
      // 调试程序时的状态栏背景颜色。
      'statusBar.debuggingBackground': this.v('activeBackground'),
      // 调试程序时的状态栏前景色。
      'statusBar.debuggingForeground': this.v('activeForeground'),
      // 状态栏突出显示项的背景颜色。
      'statusBarItem.prominentBackground': this.v('activeBackground'),
      // 当未打开文件夹时，状态栏的前景色。
      'statusBar.noFolderForeground': '#999999',
      // 当未打开文件夹时，状态栏的背景颜色。
      'statusBar.noFolderBackground': this.v('background'),
      // 键盘导航焦点在状态栏上时的状态栏边框颜色。状态栏显示在窗口底部。
      'statusBar.focusBorder': '#00000000',
      // 状态栏突出显示项的前景色。
      'statusBarItem.prominentForeground': '#000000',
      // 状态栏上远程指示器的背景颜色。
      'statusBarItem.remoteBackground': '#66b395',
      // 状态栏上远程指示器的前景色。
      'statusBarItem.remoteForeground': '#000000',
      // 状态栏错误项的背景颜色。错误项与其他状态栏条目区分开，以表示错误条件。
      'statusBarItem.errorBackground': '#ff8787',
      // 状态栏错误项的前景色。错误项与其他状态栏条目区分开，以表示错误条件。
      'statusBarItem.errorForeground': '#000000',
      // 状态栏警告项的背景颜色。警告项与其他状态栏条目区分开，以表示警告条件。状态栏显示在窗口底部。
      'statusBarItem.warningBackground': '#d8b544',
      // 状态栏警告项的前景色。警告项与其他状态栏条目区分开，以表示警告条件。状态栏显示在窗口底部。
      'statusBarItem.warningForeground': '#000000',

      // 在调试程序时分隔状态栏和编辑器的状态栏边框颜色。
      'statusBar.debuggingBorder': '',
      // 在未打开文件夹时分隔状态栏和编辑器的状态栏边框颜色。
      'statusBar.noFolderBorder': '',
      // 单击时状态栏项的背景颜色。
      'statusBarItem.activeBackground': '',
      // 鼠标悬停时状态栏项的前景色。状态栏显示在窗口底部。
      'statusBarItem.hoverForeground': '',
      // 鼠标悬停时状态栏项的背景颜色。
      'statusBarItem.hoverBackground': '',
      // 鼠标悬停时突出显示的状态栏项的前景色。突出显示的项与其他状态栏条目区分开，以表示重要性。状态栏显示在窗口底部。
      'statusBarItem.prominentHoverForeground': '',
      // 鼠标悬停时突出显示的状态栏项的背景颜色。
      'statusBarItem.prominentHoverBackground': '',
      // 鼠标悬停时状态栏上远程指示器的背景颜色。
      'statusBarItem.remoteHoverBackground': '',
      // 鼠标悬停时状态栏上远程指示器的前景色。
      'statusBarItem.remoteHoverForeground': '',
      // 鼠标悬停时状态栏错误项的背景颜色。错误项与其他状态栏条目区分开，以表示错误条件。状态栏显示在窗口底部。
      'statusBarItem.errorHoverBackground': '',
      // 鼠标悬停时状态栏错误项的前景色。错误项与其他状态栏条目区分开，以表示错误条件。状态栏显示在窗口底部。
      'statusBarItem.errorHoverForeground': '',

      // 鼠标悬停时状态栏警告项的背景颜色。警告项与其他状态栏条目区分开，以表示警告条件。状态栏显示在窗口底部。
      'statusBarItem.warningHoverBackground': '',
      // 鼠标悬停时状态栏警告项的前景色。警告项与其他状态栏条目区分开，以表示警告条件。状态栏显示在窗口底部。
      'statusBarItem.warningHoverForeground': '',
      // 当悬停在包含两个悬停的项上时，状态栏项的背景颜色。状态栏显示在窗口底部。
      'statusBarItem.compactHoverBackground': '',
      // 键盘导航焦点在状态栏项上时的状态栏项边框颜色。状态栏显示在窗口底部。
      'statusBarItem.focusBorder': '',

      // 当工作台处于离线状态时，状态栏项的背景颜色。
      'statusBarItem.offlineBackground': '',
      // 当工作台处于离线状态时，状态栏项的前景色。
      'statusBarItem.offlineForeground': '',
      // 当工作台处于离线状态时，鼠标悬停时状态栏项的前景色。
      'statusBarItem.offlineHoverForeground': '',
      // 当工作台处于离线状态时，鼠标悬停时状态栏项的背景颜色。状态栏显示在窗口底部。
      'statusBarItem.offlineHoverBackground': '',
    })
  }

  /**
   * Title bar colors
   * @url https://code.visualstudio.com/api/references/theme-color#title-bar-colors
   */
  registerTitleBarColors() {
    return this.addColors<VSCodeColor.TitleBarColors>({
      // 窗口处于活动状态时的标题栏前景色。
      'titleBar.activeForeground': this.v('activeForeground'), // 窗口处于活动状态时标题栏前景
      // 窗口处于活动状态时的标题栏背景颜色。
      'titleBar.activeBackground': this.v('background'), // 窗口处于活动状态时标题栏背景
      // 窗口处于非活动状态时的标题栏前景色。
      'titleBar.inactiveForeground': this.palette.gray[5], // 窗口非活动状态时的标题栏前景
      // 窗口处于非活动状态时的标题栏背景颜色。
      'titleBar.inactiveBackground': this.v('background'), // 窗口非活动状态时的标题栏背景
      // 标题栏的边框颜色。
      'titleBar.border': this.v('activeBackground'), // 标题栏边框颜色
    })
  }

  registerMenuColors() {
    return this.addColors<VSCodeColor.MenuColors>({
      // 菜单栏中选定菜单项的前景色。
      'menubar.selectionForeground': '',
      // 菜单栏中选定菜单项的背景颜色。
      'menubar.selectionBackground': '',
      // 菜单栏中选定菜单项的边框颜色。
      'menubar.selectionBorder': '',
      // 菜单项的前景色。
      'menu.foreground': '#cccccc',
      // 菜单项的背景颜色。
      'menu.background': '#181818',
      // 菜单中分隔符菜单项的颜色。
      'menu.separatorBackground': this.v('border'),
      // 菜单中选定菜单项的前景色。
      'menu.selectionForeground': '',
      // 菜单中选定菜单项的背景颜色。
      'menu.selectionBackground': '',
      // 菜单中选定菜单项的边框颜色。
      'menu.selectionBorder': '',
      // 菜单的边框颜色。
      'menu.border': '',
    })
  }

  /**
   * Command Center colors
   * @url https://code.visualstudio.com/api/references/theme-color#command-center-colors
   */

  registerCommandCenterColors() {
    return this.addColors<VSCodeColor.CommandCenterColors>({
      // 命令中心的前景色。
      'commandCenter.foreground': '',
      // 命令中心的活动前景色。
      'commandCenter.activeForeground': '',
      // 命令中心的背景颜色。
      'commandCenter.background': '',
      // 命令中心的活动背景颜色。
      'commandCenter.activeBackground': '#ffffff10',
      // 命令中心的边框颜色。
      'commandCenter.border': '#ffffff2a',
      // 窗口处于非活动状态时命令中心的前景色。
      'commandCenter.inactiveForeground': '',
      // 窗口处于非活动状态时命令中心的边框颜色。
      'commandCenter.inactiveBorder': '',
      // 命令中心的活动边框颜色。
      'commandCenter.activeBorder': '',
      // 当程序正在进行调试时的命令中心背景颜色。
      'commandCenter.debuggingBackground': '',
    })
  }

  /**
   * Notification colors
   * @url https://code.visualstudio.com/api/references/theme-color#notification-colors
   */
  registerNotificationColors() {
    return this.addColors<VSCodeColor.NotificationColors>({
      // 通知中心标题的前景色。
      'notificationCenterHeader.foreground': this.palette.gray[5],
      // 通知中心标题的背景颜色。
      'notificationCenterHeader.background': this.v('background'),
      // 通知的前景色。
      'notifications.foreground': this.v('foreground'),
      // 通知的背景颜色。
      'notifications.background': this.v('background'),
      // 通知与其他通知在通知中心中分隔的边框颜色。
      'notifications.border': this.v('border'),
      // 通知错误图标的颜色。
      'notificationsErrorIcon.foreground': this.v('red'),
      // 通知警告图标的颜色。
      'notificationsWarningIcon.foreground': this.v('orange'),
      // 通知信息图标的颜色。
      'notificationsInfoIcon.foreground': this.v('blue'),

      // 通知中心的边框颜色。
      'notificationCenter.border': '',
      // 通知弹窗的边框颜色。
      'notificationToast.border': '',
      // 通知中链接的前景色。
      'notificationLink.foreground': '',
    })
  }

  /**
   * Banner colors
   * @url https://code.visualstudio.com/api/references/theme-color#banner-colors
   */
  registerBannerColors() {
    return this.addColors<VSCodeColor.BannerColors>({
      // Banner的背景颜色。
      'banner.background': '#444444',
      // Banner的前景颜色。
      'banner.foreground': '#ffffff',
      // Banner文本前面图标的颜色。
      'banner.iconForeground': '',
    })
  }

  /**
   * Extensions colors
   */
  registerExtensionsColors() {
    return this.addColors<VSCodeColor.ExtensionsColors>({
      // Extension视图按钮前景色（例如“安装”按钮）。
      'extensionButton.prominentForeground': '',
      // Extension视图按钮背景色。
      'extensionButton.prominentBackground': '',
      // Extension视图按钮背景悬停色。
      'extensionButton.prominentHoverBackground': '',
      // Extension操作按钮背景色。
      'extensionButton.background': '',
      // Extension操作按钮前景色。
      'extensionButton.foreground': '',
      // Extension操作按钮背景悬停色。
      'extensionButton.hoverBackground': '',
      // Extension操作按钮的分隔符颜色。
      'extensionButton.separator': '',
      // Extension视图中远程徽章的背景色。
      'extensionBadge.remoteBackground': '',
      // Extension视图中远程徽章的前景色。
      'extensionBadge.remoteForeground': '',
      // Extension评级图标的颜色。
      'extensionIcon.starForeground': '',
      // Extension验证发布者图标的颜色。
      'extensionIcon.verifiedForeground': '',
      // 预发布Extension的图标颜色。
      'extensionIcon.preReleaseForeground': '',
      // Extension赞助商图标的颜色。
      'extensionIcon.sponsorForeground': '',
    })
  }

  /**
   * Quick picker colors
   */
  registerQuickPickerColors() {
    return this.addColors<VSCodeColor.QuickPickerColors>({
      // Quick picker中分组边框的颜色。
      'pickerGroup.border': this.v('border'),
      // Quick picker中分组标签的颜色。
      'pickerGroup.foreground': this.v('foreground'),
      // Quick input的背景颜色。Quick input小部件是颜色主题选择器等视图的容器。
      'quickInput.background': this.v('background'),
      // Quick input的前景颜色。Quick input小部件是颜色主题选择器等视图的容器。
      'quickInput.foreground': this.v('foreground'),
      // 快速选择器中焦点项目的背景颜色。
      'quickInputList.focusBackground': this.v('activeBackground'),
      // 快速选择器中焦点项目的前景颜色。
      'quickInputList.focusForeground': '',
      // 快速选择器中焦点项目的图标前景色。
      'quickInputList.focusIconForeground': '',
      // 快速选择器标题的背景颜色。快速选择器小部件是命令面板等选择器的容器。
      'quickInputTitle.background': '',
    })
  }

  registerKeybindingLabel() {
    return this.addColors<VSCodeColor.KeybindingLabel>({
      // 快捷键标签的背景颜色。快捷键标签用于表示键盘快捷键。
      'keybindingLabel.background': '',
      // 快捷键标签的前景颜色。快捷键标签用于表示键盘快捷键。
      'keybindingLabel.foreground': '',
      // 快捷键标签的边框颜色。快捷键标签用于表示键盘快捷键。
      'keybindingLabel.border': '',
      // 快捷键标签的底部边框颜色。快捷键标签用于表示键盘快捷键。
      'keybindingLabel.bottomBorder': '',

    })
  }

  /**
   * Keyboard shortcut table colors
   * @url https://code.visualstudio.com/api/references/theme-color#keyboard-shortcut-table-colors
   */
  registerKeybindingTable() {
    return this.addColors<VSCodeColor.KeybindingTable>({
      // 键盘快捷键表头的背景颜色。
      'keybindingTable.headerBackground': '',
      // 键盘快捷键表格交替行的背景颜色。
      'keybindingTable.rowsBackground': '',
    })
  }

  /**
   * Integrated Terminal colors
   * @url https://code.visualstudio.com/api/references/theme-color#integrated-terminal-colors
   */
  registerIntegratedTerminalColors() {
    return this.addColors<VSCodeColor.IntegratedTerminalColors>({
      // 集成终端视口的背景颜色。
      'terminal.background': '#181818',
      // 集成终端的默认前景色。
      'terminal.foreground': this.v('foreground'),
      // 终端的选择背景颜色。
      'terminal.selectionBackground': this.v('selectionBackground'),
      'terminal.ansiBrightBlack': this.pick({ light: '#aaaaaa', dark: '#777777' }),
      'terminal.ansiBrightBlue': this.v('blue'),
      'terminal.ansiBrightCyan': this.v('cyan'),
      'terminal.ansiBrightGreen': this.v('green'),
      'terminal.ansiBrightMagenta': this.v('magenta'),
      'terminal.ansiBrightRed': this.v('red'),
      'terminal.ansiBrightWhite': this.pick({ light: '#dddddd', dark: '#ffffff' }),
      'terminal.ansiBrightYellow': this.v('yellow'),
      'terminal.ansiBlack': this.pick({
        light: themeColor.background[0],
        dark: themeColor.foreground[1],
      }),
      'terminal.ansiBlue': this.v('blue'),
      'terminal.ansiCyan': this.v('cyan'),
      'terminal.ansiGreen': this.v('green'),
      'terminal.ansiMagenta': this.v('magenta'),
      'terminal.ansiRed': this.v('red'),
      'terminal.ansiWhite': this.pick({
        light: themeColor.foreground[0],
        dark: themeColor.foreground[0],
      }),
      'terminal.ansiYellow': this.v('yellow'),
      // 面板中终端选项卡侧边的边框。默认为'tab.activeBorder'。
      'terminal.tab.activeBorder': '#66b395',

      // 在终端中分隔分栏的边框颜色。默认为panel.border。
      'terminal.border': '',
      // 终端的选择前景颜色。当这个值为null时，选择前景色将被保留，并应用最小对比度特性。
      'terminal.selectionForeground': '',
      // 终端失去焦点时的选择背景颜色。
      'terminal.inactiveSelectionBackground': '',
      // 终端中当前搜索匹配的颜色。颜色不能是不透明的，以免隐藏底层终端内容。
      'terminal.findMatchBackground': '',
      // 终端中当前搜索匹配的边框颜色。
      'terminal.findMatchBorder': '',
      // 终端中其他搜索匹配的颜色。颜色不能是不透明的，以免隐藏底层终端内容。
      'terminal.findMatchHighlightBackground': '',
      // 终端中其他搜索匹配的边框颜色。
      'terminal.findMatchHighlightBorder': '',
      // 在终端中悬停链接时的高亮颜色。
      'terminal.hoverHighlightBackground': '',
      // 终端光标的背景颜色。允许自定义被块状光标遮挡的字符的颜色。
      'terminalCursor.background': '',
      // 终端光标的前景颜色。
      'terminalCursor.foreground': '',
      // 拖动到终端上方时的背景颜色。颜色应该具有透明度，以便终端内容仍然可见。
      'terminal.dropBackground': '',
      // 默认终端命令装饰的背景颜色。
      'terminalCommandDecoration.defaultBackground': '',
      // 成功命令的终端命令装饰背景颜色。
      'terminalCommandDecoration.successBackground': '',
      // 错误命令的终端命令装饰背景颜色。
      'terminalCommandDecoration.errorBackground': '',
      // 概览标尺光标的颜色。
      'terminalOverviewRuler.cursorForeground': '',
      // 终端中查找匹配的概览标尺标记颜色。
      'terminalOverviewRuler.findMatchForeground': '',
      // 终端中粘性滚动叠加层的背景颜色。
      'terminalStickyScroll.background': '',
      // 终端中悬停时粘性滚动叠加层的背景颜色。
      'terminalStickyScrollHover.background': '',
    })
  }

  /**
   * Debug colors
   * @url https://code.visualstudio.com/api/references/theme-color#debug-colors
   */
  registerDebugColors() {
    return this.addColors<VSCodeColor.DebugColors>({
      // 调试工具栏的背景颜色。
      'debugToolBar.background': this.v('background'),
      // 调试工具栏的边框颜色。
      'debugToolBar.border': '',
      // 编辑器中顶部堆栈帧高亮的背景颜色。
      'editor.stackFrameHighlightBackground': this.pick({
        light: this.palette.yellow[1],
        dark: '#a707',
      }),
      // 编辑器中焦点堆栈帧高亮的背景颜色。
      'editor.focusedStackFrameHighlightBackground': this.pick({
        light: this.palette.yellow[2],
        dark: '#b808',
      }),
      // 调试内联值文本的颜色。
      'editor.inlineValuesForeground': '',
      // 调试内联值的背景颜色。
      'editor.inlineValuesBackground': '',
      // 当调试器在异常处中断时，在CALL STACK视图中显示的标签的前景颜色。
      'debugView.exceptionLabelForeground': '',
      // 当调试器在异常处中断时，在CALL STACK视图中显示的标签的背景颜色。
      'debugView.exceptionLabelBackground': '',
      // 在CALL STACK视图中显示的标签，用于显示当前会话或线程的状态的前景颜色。
      'debugView.stateLabelForeground': '',
      // 在CALL STACK视图中显示的标签，用于显示当前会话或线程的状态的背景颜色。
      'debugView.stateLabelBackground': '',
      // 用于在调试视图中（如变量视图）中突出显示值更改的颜色。
      'debugView.valueChangedHighlight': '',
      // 在调试视图（如变量或监视视图）中显示的令牌名称的前景颜色。
      'debugTokenExpression.name': '',
      // 在调试视图中（如变量或监视视图）显示的令牌值的前景颜色。
      'debugTokenExpression.value': '',
      // 在调试视图中字符串的前景颜色。
      'debugTokenExpression.string': '',
      // 在调试视图中布尔值的前景颜色。
      'debugTokenExpression.boolean': '',
      // 在调试视图中数字的前景颜色。
      'debugTokenExpression.number': '',
      // 在调试视图中表达式错误的前景颜色。
      'debugTokenExpression.error': '',
    })
  }

  /**
   * Testing colors
   * @url https://code.visualstudio.com/api/references/theme-color#debug-colors
   */
  registerTestingColors() {
    return this.addColors<VSCodeColor.TestingColors>({
      // 测试资源管理器中“失败”图标的颜色。
      'testing.iconFailed': '',
      // 测试资源管理器中“错误”图标的颜色。
      'testing.iconErrored': '',
      // 测试资源管理器中“通过”图标的颜色。
      'testing.iconPassed': '',
      // 编辑器中“运行”图标的颜色。
      'testing.runAction': '',
      // 测试资源管理器中“排队”图标的颜色。
      'testing.iconQueued': '',
      // 测试资源管理器中“未设置”图标的颜色。
      'testing.iconUnset': '',
      // 测试资源管理器中“跳过”图标的颜色。
      'testing.iconSkipped': '',
      // peek视图边框和箭头的颜色。
      'testing.peekBorder': '',
      // peek视图标题栏的背景颜色。
      'testing.peekHeaderBackground': '',
      // 在编辑器中显示的测试错误消息的文本颜色。
      'testing.message.error.decorationForeground': '',
      // 在编辑器中显示的测试错误消息旁边的边距颜色。
      'testing.message.error.lineBackground': '',
      // 在编辑器中显示的测试信息消息的文本颜色。
      'testing.message.info.decorationForeground': '',
      // 在编辑器中显示的测试信息消息旁边的边距颜色。
      'testing.message.info.lineBackground': '',
    })
  }

  /**
   * Welcome page colors
   * @url https://code.visualstudio.com/api/references/theme-color#welcome-page-colors
   */
  registerWelcomePageColors() {
    return this.addColors<VSCodeColor.WelcomePageColors>({
      // 欢迎页面的背景颜色。
      'welcomePage.background': '',
      // 欢迎页面进度条的前景颜色。
      'welcomePage.progress.background': '',
      // 欢迎页面进度条的背景颜色。
      'welcomePage.progress.foreground': '',
      // 欢迎页面上磁贴的背景颜色。
      'welcomePage.tileBackground': '',
      // 欢迎页面上磁贴的悬停背景颜色。
      'welcomePage.tileHoverBackground': '',
      // 欢迎页面上磁贴的边框颜色。
      'welcomePage.tileBorder': '',

      // 交互式 Playground 中嵌入式编辑器的背景颜色。
      'walkThrough.embeddedEditorBackground': '',
      // 演练步骤标题的前景颜色。
      'walkthrough.stepTitle.foreground': '',
    })
  }

  /**
   * Git colors
   * @url https://code.visualstudio.com/api/references/theme-color#git-colors
   */
  registerGitColors() {
    return this.addColors<VSCodeColor.GitColors>({
      // 新增的 Git 资源的颜色。用于文件标签和 SCM 视图。
      'gitDecoration.addedResourceForeground': this.v('green'),
      // 修改的 Git 资源的颜色。用于文件标签和 SCM 视图。
      'gitDecoration.modifiedResourceForeground': this.v('blue'),
      // 删除的 Git 资源的颜色。用于文件标签和 SCM 视图。
      'gitDecoration.deletedResourceForeground': this.v('red'),
      // 未跟踪的 Git 资源的颜色。用于文件标签和 SCM 视图。
      'gitDecoration.untrackedResourceForeground': this.v('cyan'),
      // 忽略的 Git 资源的颜色。用于文件标签和 SCM 视图。
      'gitDecoration.ignoredResourceForeground': this.v('ignored'),
      // 冲突的 Git 资源的颜色。用于文件标签和 SCM 视图。
      'gitDecoration.conflictingResourceForeground': this.v('orange'),
      // 子模块资源的颜色。
      'gitDecoration.submoduleResourceForeground': this.v(
        'secondaryForeground',
      ),
      // 重命名或复制的 Git 资源的颜色。用于文件标签和 SCM 视图。
      'gitDecoration.renamedResourceForeground': '#6ab8c0',

      // 暂存的修改 Git 资源的颜色。用于文件标签和 SCM 视图。
      'gitDecoration.stageModifiedResourceForeground': '',
      // 暂存的删除 Git 资源的颜色。用于文件标签和 SCM 视图。
      'gitDecoration.stageDeletedResourceForeground': '',
    })
  }

  /**
   * Settings Editor colors
   */
  registerSettingsEditorColors() {
    return this.addColors<VSCodeColor.SettingsEditorColors>({
      // 部分标题或活动标题的前景颜色。
      'settings.headerForeground': this.v('foreground'),
      // 指示已修改设置的线条。
      'settings.modifiedItemIndicator': this.v('primary'),
      // 下拉菜单的背景颜色。
      'settings.dropdownBackground': '',
      // 下拉菜单的前景颜色。
      'settings.dropdownForeground': '',
      // 下拉菜单的边框颜色。
      'settings.dropdownBorder': '',
      // 下拉菜单列表的边框颜色。
      'settings.dropdownListBorder': '',
      // 复选框的背景颜色。
      'settings.checkboxBackground': '',
      // 复选框的前景颜色。
      'settings.checkboxForeground': '',
      // 复选框的边框颜色。
      'settings.checkboxBorder': '',
      // 鼠标悬停时设置行的背景颜色。
      'settings.rowHoverBackground': '',
      // 文本输入框的背景颜色。
      'settings.textInputBackground': '',
      // 文本输入框的前景颜色。
      'settings.textInputForeground': '',
      // 文本输入框的边框颜色。
      'settings.textInputBorder': '',
      // 数字输入框的背景颜色。
      'settings.numberInputBackground': '',
      // 数字输入框的前景颜色。
      'settings.numberInputForeground': '',
      // 数字输入框的边框颜色。
      'settings.numberInputBorder': '',
      // 获得焦点的设置行的背景颜色。
      'settings.focusedRowBackground': '',
      // 当行获得焦点时，行的顶部和底部边框的颜色。
      'settings.focusedRowBorder': '',
      // 头部容器边框的颜色。
      'settings.headerBorder': '',
      // 设置编辑器分割视图 sash 边框的颜色。
      'settings.sashBorder': '',
      // 部分标题或悬停标题的前景颜色。
      'settings.settingsHeaderHoverForeground': '',
    })
  }

  /**
   * Breadcrumbs colors
   * @url https://code.visualstudio.com/api/references/theme-color#breadcrumbs-colors
   */
  registerBreadcrumbsColors() {
    return this.addColors<VSCodeColor.BreadcrumbsColors>({
      // 面包屑导航项的颜色。
      'breadcrumb.foreground': this.palette.gray[5],
      // 面包屑导航项的背景颜色。
      'breadcrumb.background': this.v('activeBackground'),
      // 聚焦的面包屑导航项的颜色。
      'breadcrumb.focusForeground': this.v('foreground'),
      // 选中的面包屑导航项的颜色。
      'breadcrumb.activeSelectionForeground': this.v('selectionBackgroundActive'),
      // 面包屑导航项选择器的背景颜色。
      'breadcrumbPicker.background': this.v('background'),

    })
  }

  /**
   * Snippets colors
   * @url https://code.visualstudio.com/api/references/theme-color#snippets-colors
   */
  registerSnippetsColors() {
    return this.addColors<VSCodeColor.SnippetsColors>({
      // Snippet tabstop 的高亮背景颜色。
      'editor.snippetTabstopHighlightBackground': '',
      // Snippet tabstop 的高亮边框颜色。
      'editor.snippetTabstopHighlightBorder': '',
      // Snippet 最后一个 tabstop 的高亮背景颜色。
      'editor.snippetFinalTabstopHighlightBackground': '',
      // Snippet 最后一个 tabstop 的高亮边框颜色。
      'editor.snippetFinalTabstopHighlightBorder': '',
    })
  }

  /**
   * Symbol Icons colors
   * @url https://code.visualstudio.com/api/references/theme-color#symbol-icons-colors
   */
  registerSymbolIconsColors(): this {
    return this.addColors<VSCodeColor.SymbolIconsColors>({
      // 数组符号的前景颜色。
      'symbolIcon.arrayForeground': '',
      // 布尔符号的前景颜色。
      'symbolIcon.booleanForeground': '',
      // 类符号的前景颜色。
      'symbolIcon.classForeground': '',
      // 颜色符号的前景颜色。
      'symbolIcon.colorForeground': '',
      // 常量符号的前景颜色。
      'symbolIcon.constantForeground': '',
      // 构造函数符号的前景颜色。
      'symbolIcon.constructorForeground': '',
      // 枚举符号的前景颜色。
      'symbolIcon.enumeratorForeground': '',
      // 枚举成员符号的前景颜色。
      'symbolIcon.enumeratorMemberForeground': '',
      // 事件符号的前景颜色。
      'symbolIcon.eventForeground': '',
      // 字段符号的前景颜色。
      'symbolIcon.fieldForeground': '',
      // 文件符号的前景颜色。
      'symbolIcon.fileForeground': '',
      // 文件夹符号的前景颜色。
      'symbolIcon.folderForeground': '',
      // 函数符号的前景颜色。
      'symbolIcon.functionForeground': '',
      // 接口符号的前景颜色。
      'symbolIcon.interfaceForeground': '',
      // 键符号的前景颜色。
      'symbolIcon.keyForeground': '',
      // 关键字符号的前景颜色。
      'symbolIcon.keywordForeground': '',
      // 方法符号的前景颜色。
      'symbolIcon.methodForeground': '',
      // 模块符号的前景颜色。
      'symbolIcon.moduleForeground': '',
      // 命名空间符号的前景颜色。
      'symbolIcon.namespaceForeground': '',
      // null 符号的前景颜色。
      'symbolIcon.nullForeground': '',
      // 数字符号的前景颜色。
      'symbolIcon.numberForeground': '',
      // 对象符号的前景颜色。
      'symbolIcon.objectForeground': '',
      // 运算符符号的前景颜色。
      'symbolIcon.operatorForeground': '',
      // 包符号的前景颜色。
      'symbolIcon.packageForeground': '',
      // 属性符号的前景颜色。
      'symbolIcon.propertyForeground': '',
      // 引用符号的前景颜色。
      'symbolIcon.referenceForeground': '',
      // Snippet 符号的前景颜色。
      'symbolIcon.snippetForeground': '',
      // 字符串符号的前景颜色。
      'symbolIcon.stringForeground': '',
      // 结构符号的前景颜色。
      'symbolIcon.structForeground': '',
      // 文本符号的前景颜色。
      'symbolIcon.textForeground': '',
      // 类型参数符号的前景颜色。
      'symbolIcon.typeParameterForeground': '',
      // 单位符号的前景颜色。
      'symbolIcon.unitForeground': '',
      // 变量符号的前景颜色。
      'symbolIcon.variableForeground': '',
    })
  }

  /**
   * Debug Icons colors
   * @url https://code.visualstudio.com/api/references/theme-color#debug-icons-colors
   */
  registerDebugIconsColors() {
    return this.addColors<VSCodeColor.DebugIconsColors>({
      // 断点的图标颜色。
      'debugIcon.breakpointForeground': '',
      // 禁用断点的图标颜色。
      'debugIcon.breakpointDisabledForeground': '',
      // 未验证的断点的图标颜色。
      'debugIcon.breakpointUnverifiedForeground': '',
      // 当前断点堆栈帧的图标颜色。
      'debugIcon.breakpointCurrentStackframeForeground': '',
      // 所有断点堆栈帧的图标颜色。
      'debugIcon.breakpointStackframeForeground': '',
      // 开始调试的调试工具栏图标。
      'debugIcon.startForeground': '',
      // 暂停的调试工具栏图标。
      'debugIcon.pauseForeground': '',
      // 停止的调试工具栏图标。
      'debugIcon.stopForeground': '',
      // 断开连接的调试工具栏图标。
      'debugIcon.disconnectForeground': '',
      // 重启的调试工具栏图标。
      'debugIcon.restartForeground': '',
      // 单步跳过的调试工具栏图标。
      'debugIcon.stepOverForeground': '',
      // 单步进入的调试工具栏图标。
      'debugIcon.stepIntoForeground': '',
      // 单步跳出的调试工具栏图标。
      'debugIcon.stepOutForeground': '',
      // 继续的调试工具栏图标。
      'debugIcon.continueForeground': '',
      // 回退一步的调试工具栏图标。
      'debugIcon.stepBackForeground': '',
      // 调试 REPL 控制台中信息消息的前景颜色。
      'debugConsole.infoForeground': '',
      // 调试 REPL 控制台中警告消息的前景颜色。
      'debugConsole.warningForeground': '',
      // 调试 REPL 控制台中错误消息的前景颜色。
      'debugConsole.errorForeground': '',
      // 调试 REPL 控制台中源文件名的前景颜色。
      'debugConsole.sourceForeground': '',
      // 调试控制台输入标记图标的前景颜色。
      'debugConsoleInputIcon.foreground': '',
    })
  }

  /**
   * Notebook colors
   * @url https://code.visualstudio.com/api/references/theme-color#notebook-colors
   */
  registerNotebookColors() {
    return this.addColors<VSCodeColor.NotebookColors>({
      // 笔记本的背景颜色。
      'notebook.editorBackground': '',
      // 笔记本单元格的边框颜色。
      'notebook.cellBorderColor': '',
      // 当鼠标悬停在单元格上时，单元格的背景颜色。
      'notebook.cellHoverBackground': '',
      // 笔记本单元格插入指示器的颜色。
      'notebook.cellInsertionIndicator': '',
      // 笔记本单元格状态栏项的背景颜色。
      'notebook.cellStatusBarItemHoverBackground': '',
      // 单元格底部工具栏中分隔符的颜色。
      'notebook.cellToolbarSeparator': '',
      // 笔记本单元格编辑器的背景颜色。
      'notebook.cellEditorBackground': '',
      // 当单元格聚焦时，单元格的背景颜色。
      'notebook.focusedCellBackground': '',
      // 当单元格聚焦时，单元格的边框颜色。
      'notebook.focusedCellBorder': '',
      // 笔记本单元格编辑器的边框颜色。
      'notebook.focusedEditorBorder': '',
      // 当主焦点不在编辑器内时，聚焦单元格的顶部和底部边框颜色。
      'notebook.inactiveFocusedCellBorder': '',
      // 当多个单元格被选择时，单元格的边框颜色。
      'notebook.inactiveSelectedCellBorder': '',
      // 笔记本输出容器的背景颜色。
      'notebook.outputContainerBackgroundColor': '',
      // 笔记本输出容器的边框颜色。
      'notebook.outputContainerBorderColor': '',
      // 当单元格被选择时，单元格的背景颜色。
      'notebook.selectedCellBackground': '',
      // 当单元格被选择但未聚焦时，单元格的顶部和底部边框颜色。
      'notebook.selectedCellBorder': '',
      // 高亮单元格的背景颜色。
      'notebook.symbolHighlightBackground': '',
      // 单击时笔记本滚动条滑块的背景颜色。
      'notebookScrollbarSlider.activeBackground': '',
      // 笔记本滚动条滑块的背景颜色。
      'notebookScrollbarSlider.background': '',
      // 鼠标悬停时笔记本滚动条滑块的背景颜色。
      'notebookScrollbarSlider.hoverBackground': '',
      // 笔记本单元格状态栏中错误图标的颜色。
      'notebookStatusErrorIcon.foreground': '',
      // 笔记本单元格状态栏中正在运行图标的颜色。
      'notebookStatusRunningIcon.foreground': '',
      // 笔记本单元格状态栏中成功图标的颜色。
      'notebookStatusSuccessIcon.foreground': '',
      // 笔记本编辑器概览标尺中正在运行单元格装饰的颜色。
      'notebookEditorOverviewRuler.runningCellForeground': '',
    })
  }

  /**
   * Chart colors
   * @url https://code.visualstudio.com/api/references/theme-color#chart-colors
   */
  registerChartColors() {
    return this.addColors<VSCodeColor.ChartColors>({
      // 图表中文本的对比颜色。
      'charts.foreground': '',
      // 图表中线条的颜色。
      'charts.lines': '',
      // 图表中红色元素的颜色。
      'charts.red': '',
      // 图表中蓝色元素的颜色。
      'charts.blue': '',
      // 图表中黄色元素的颜色。
      'charts.yellow': '',
      // 图表中橙色元素的颜色。
      'charts.orange': '',
      // 图表中绿色元素的颜色。
      'charts.green': '',
      // 图表中紫色元素的颜色。
      'charts.purple': '',
    })
  }

  /**
   * Ports Colors
   * @url https://code.visualstudio.com/api/references/theme-color#ports-colors
   */
  registerPortsColors() {
    return this.addColors<VSCodeColor.PortsColors>({
      // 具有关联运行进程的端口图标的颜色。
      'ports.iconRunningProcessForeground': '',
    })
  }

  /**
   * Comments View colors
   * @url https://code.visualstudio.com/api/references/theme-color#comments-view-colors
   */
  registerCommentsViewColors() {
    return this.addColors<VSCodeColor.CommentsViewColors>({
      // 已解决评论的图标颜色。
      'commentsView.resolvedIcon': '',
      // 未解决评论的图标颜色。
      'commentsView.unresolvedIcon': '',
    })
  }

  /**
   * Action Bar colors
   * @url https://code.visualstudio.com/api/references/theme-color#aciton-bar-colors
   */
  registerActionBarColors() {
    return this.addColors<VSCodeColor.ActionBarColors>({
      // 操作栏中已切换动作项的背景颜色。
      'actionBar.toggledBackground': '',

    })
  }

  /**
   * Simple Find Widget
   * @url https://code.visualstudio.com/api/references/theme-color#simple-find-widget
   */
  registerSimpleFindWidget() {
    return this.addColors<VSCodeColor.SimpleFindWidget>({
      // 闪电小部件边框的边框颜色。
      'simpleFindWidget.sashBorder': '',
    })
  }

  /**
   * SCM
   * @url https://code.visualstudio.com/api/references/theme-color#scm
   */
  registerSCM() {
    return this.addColors<VSCodeColor.SCM>({
      // SCM（源代码管理）历史记录项添加部分的前景色。
      'scm.historyItemAdditionsForeground': '',
      // SCM（源代码管理）历史记录项删除部分的前景色。
      'scm.historyItemDeletionsForeground': '',
      // SCM（源代码管理）历史记录项统计边框的颜色。
      'scm.historyItemStatisticsBorder': '',
      // SCM（源代码管理）历史记录项被选中的统计边框的颜色。
      'scm.historyItemSelectedStatisticsBorder': '',
    })
  }

  buildColor() {
    this.registerContrastColors()
      .registerBaseColor()
      .registerWindowBorder()
      .registerTextColors()
      .registerActionColors()
      .registerButtonControl()
      .registerDropdownControl()
      .registerInputControl()
      .registerScrollbarControl()
      .registerBadge()
      .registerProgressBar()
      .registerListsAndTrees()
      .registerActivityBar()
      .registerProfiles()
      .registerSideBar()
      .registerMinimap()
      .registerEditGroupsAndTabs()
      .registerEditorColors()
      .registerDiffEditorColors()
      .registerEditorWidgetColors()
      .registerPeekViewColors()
      .registerMergeConflictsColors()
      .registerPanelColors()
      .registerStatusBarColors()
      .registerTitleBarColors()
      .registerMenuColors()
      .registerCommandCenterColors()
      .registerNotificationColors()
      .registerBannerColors()
      .registerExtensionsColors()
      .registerQuickPickerColors()
      .registerKeybindingLabel()
      .registerKeybindingTable()
      .registerIntegratedTerminalColors()
      .registerDebugColors()
      .registerTestingColors()
      .registerWelcomePageColors()
      .registerGitColors()
      .registerSettingsEditorColors()
      .registerBreadcrumbsColors()
      .registerSnippetsColors()
      .registerSymbolIconsColors()
      .registerDebugIconsColors()
      .registerNotebookColors()
      .registerChartColors()
      .registerPortsColors()
      .registerCommentsViewColors()
      .registerActionBarColors()
      .registerSimpleFindWidget()
      .registerSCM()
    return Object.keys(this.colors).reduce((prev, key) => {
      if (this.colors[key])
        prev[key] = this.colors[key]

      return prev
    }, {} as Record<string, string>)
  }

  getColors() {
    return this.colors
  }
}
