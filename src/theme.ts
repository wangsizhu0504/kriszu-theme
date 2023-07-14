import { getColors } from './primer'
import { themeGroup } from './colors'
import { toArray } from './utils'

export default function getTheme({ style, name, soft = false, black = false }: any) {
  // Usage: `pick({ light: "lightblue", dark: "darkblue" })`
  const pick = (options: any) => options[style]

  const kzTheme = (key: keyof typeof themeGroup, op = '') => pick({ light: themeGroup[key][1] + op, dark: themeGroup[key][0] + op })

  const primer = getColors(style)

  const foreground = black ? '#dbd7cacc' : kzTheme('foreground')
  const secondaryForeground = kzTheme('secondaryForeground')
  const activeForeground = kzTheme('activeForeground')
  const primary = kzTheme('primary')

  const border = soft ? kzTheme('lowBorder') : kzTheme('border')
  const background = black ? '#000' : soft ? kzTheme('lowBackground') : kzTheme('background')
  const activeBackground = black ? '#121212' : soft ? kzTheme('lowActiveBackground') : kzTheme('activeBackground')

  const punctuation = black ? kzTheme('punctuation', 'cc') : kzTheme('punctuation')

  const selectionBackgroundInActive = pick({ light: '#22222208', dark: '#eeeeee08' })
  const selectionBackgroundActive = pick({ light: '#22222215', dark: '#eeeeee15' })
  const selectionBackground = pick({ light: '#22222215', dark: '#eeeeee15' })

  const theme = {
    name,
    base: pick({ light: 'vs', dark: 'vs-dark' }),
    colors: {
      'focusBorder': '#00000000',
      foreground,
      'descriptionForeground': secondaryForeground,
      'errorForeground': kzTheme('red'),

      'textLink.foreground': primary,
      'textLink.activeForeground': primary,
      'textBlockQuote.background': background,
      'textBlockQuote.border': border,
      'textCodeBlock.background': background,
      'textPreformat.foreground': primer.gray[6],
      'textSeparator.foreground': primer.gray[3],

      'button.background': primary,
      'button.foreground': background,
      'button.hoverBackground': primary,

      'checkbox.background': activeBackground,
      'checkbox.border': pick({ light: primer.gray[3], dark: primer.gray[1] }),

      'dropdown.background': background,
      'dropdown.border': border,
      'dropdown.foreground': foreground,
      'dropdown.listBackground': activeBackground,

      'input.background': activeBackground,
      'input.border': border,
      'input.foreground': foreground,
      'input.placeholderForeground': secondaryForeground,
      'inputOption.activeBackground': kzTheme('ignored'),

      'badge.foreground': background,
      'badge.background': secondaryForeground,

      'progressBar.background': primary,

      'titleBar.activeForeground': activeForeground,
      'titleBar.activeBackground': background,
      'titleBar.inactiveForeground': primer.gray[5],
      'titleBar.inactiveBackground': background,
      'titleBar.border': activeBackground,

      'activityBar.foreground': foreground,
      'activityBar.inactiveForeground': kzTheme('ignored'),
      'activityBar.background': background,
      'activityBarBadge.foreground': background,
      'activityBarBadge.background': activeForeground,
      'activityBar.activeBorder': primary,
      'activityBar.border': border,

      'sideBar.foreground': activeForeground,
      'sideBar.background': background,
      'sideBar.border': border,
      'sideBarTitle.foreground': foreground,
      'sideBarSectionHeader.foreground': foreground,
      'sideBarSectionHeader.background': background,
      'sideBarSectionHeader.border': border,

      'list.hoverForeground': foreground,
      'list.inactiveSelectionForeground': foreground,
      'list.activeSelectionForeground': foreground,
      'list.hoverBackground': activeBackground,
      'list.inactiveSelectionBackground': activeBackground,
      'list.activeSelectionBackground': pick({ light: '#22222208', dark: '#eeeeee08' }),
      'list.inactiveFocusBackground': background,
      'list.focusBackground': activeBackground,
      'list.highlightForeground': primary,

      'tree.indentGuidesStroke': pick({ light: primer.gray[2], dark: primer.gray[1] }),

      'notificationCenterHeader.foreground': primer.gray[5],
      'notificationCenterHeader.background': background,
      'notifications.foreground': foreground,
      'notifications.background': background,
      'notifications.border': border,
      'notificationsErrorIcon.foreground': kzTheme('red'),
      'notificationsWarningIcon.foreground': kzTheme('orange'),
      'notificationsInfoIcon.foreground': kzTheme('blue'),

      'pickerGroup.border': border,
      'pickerGroup.foreground': foreground,
      'quickInput.background': background,
      'quickInput.foreground': foreground,
      'quickInputList.focusBackground': activeBackground,

      'statusBar.foreground': activeForeground,
      'statusBar.background': background,
      'statusBar.border': border,
      'statusBar.noFolderBackground': background,
      'statusBar.debuggingBackground': activeBackground,
      'statusBar.debuggingForeground': activeForeground,
      'statusBarItem.prominentBackground': activeBackground,

      'editorGroupHeader.tabsBackground': background,
      'editorGroupHeader.tabsBorder': border,
      'editorGroup.border': border,

      'tab.activeForeground': foreground,
      'tab.inactiveForeground': primer.gray[5],
      'tab.inactiveBackground': background,
      'tab.activeBackground': background,
      'tab.hoverBackground': activeBackground,
      'tab.unfocusedHoverBackground': background,
      'tab.border': border,
      'tab.unfocusedActiveBorderTop': border,
      'tab.activeBorder': border,
      'tab.unfocusedActiveBorder': border,
      'tab.activeBorderTop': secondaryForeground,

      'breadcrumb.foreground': primer.gray[5],
      'breadcrumb.focusForeground': foreground,
      'breadcrumb.background': activeBackground,
      'breadcrumb.activeSelectionForeground': selectionBackgroundActive,
      'breadcrumbPicker.background': background,

      'editor.foreground': foreground,
      'editor.background': background,
      'editorWidget.background': background,
      'editor.foldBackground': pick({ light: '#22222210', dark: '#eeeeee10' }),
      'editor.lineHighlightBackground': activeBackground,
      'editorLineNumber.foreground': kzTheme('ignored'),
      'editorLineNumber.activeForeground': activeForeground,
      'editorIndentGuide.background': pick({ light: '#00000015', dark: '#ffffff15' }),
      'editorIndentGuide.activeBackground': pick({ light: '#00000030', dark: '#ffffff30' }),
      'editorWhitespace.foreground': pick({ light: '#00000015', dark: '#ffffff15' }),
      // 'editorCursor.foreground': primary,

      'editor.findMatchBackground': pick({ light: '#e6cc7744', dark: '#e6cc7722' }),
      'editor.findMatchHighlightBackground': pick({ light: '#e6cc7766', dark: '#e6cc7744' }),
      'editor.inactiveSelectionBackground': selectionBackgroundInActive,
      'editor.selectionBackground': selectionBackground,
      'editor.selectionHighlightBackground': selectionBackgroundInActive,
      'editor.wordHighlightBackground': pick({ light: '#1c6b4805', dark: '#1c6b4805' }),
      'editor.wordHighlightStrongBackground': pick({ light: '#1c6b4810', dark: '#1c6b4810' }),
      'editorBracketMatch.background': pick({ light: '#1c6b4820', dark: '#4d937520' }),

      'diffEditor.insertedTextBackground': pick({ light: '#1c6b4815', dark: '#4d937522' }),
      'diffEditor.removedTextBackground': pick({ light: '#ab595910', dark: '#ab595922' }),

      'scrollbar.shadow': pick({ light: '#6a737d33', dark: '#0000' }),
      'scrollbarSlider.background': kzTheme('faded'),
      'scrollbarSlider.hoverBackground': kzTheme('ignored'),
      'scrollbarSlider.activeBackground': kzTheme('ignored'),
      'editorOverviewRuler.border': primer.white,

      'panel.background': background,
      'panel.border': border,
      'panelTitle.activeBorder': primary,
      'panelTitle.activeForeground': foreground,
      'panelTitle.inactiveForeground': primer.gray[5],
      'panelInput.border': pick({ light: primer.gray[2], dark: primer.gray[1] }),

      'terminal.foreground': foreground,
      'terminal.selectionBackground': selectionBackground,
      'terminal.ansiBrightBlack': pick({ light: '#aaaaaa', dark: '#777777' }),
      'terminal.ansiBrightBlue': kzTheme('blue'),
      'terminal.ansiBrightCyan': kzTheme('cyan'),
      'terminal.ansiBrightGreen': kzTheme('green'),
      'terminal.ansiBrightMagenta': kzTheme('magenta'),
      'terminal.ansiBrightRed': kzTheme('red'),
      'terminal.ansiBrightWhite': pick({ light: '#dddddd', dark: '#ffffff' }),
      'terminal.ansiBrightYellow': kzTheme('yellow'),
      'terminal.ansiBlack': pick({ light: themeGroup.background[0], dark: themeGroup.foreground[1] }),
      'terminal.ansiBlue': kzTheme('blue'),
      'terminal.ansiCyan': kzTheme('cyan'),
      'terminal.ansiGreen': kzTheme('green'),
      'terminal.ansiMagenta': kzTheme('magenta'),
      'terminal.ansiRed': kzTheme('red'),
      'terminal.ansiWhite': pick({ light: themeGroup.foreground[0], dark: themeGroup.foreground[0] }),
      'terminal.ansiYellow': kzTheme('yellow'),

      'gitDecoration.addedResourceForeground': kzTheme('green'),
      'gitDecoration.modifiedResourceForeground': kzTheme('blue'),
      'gitDecoration.deletedResourceForeground': kzTheme('red'),
      'gitDecoration.untrackedResourceForeground': kzTheme('cyan'),
      'gitDecoration.ignoredResourceForeground': kzTheme('ignored'),
      'gitDecoration.conflictingResourceForeground': kzTheme('orange'),
      'gitDecoration.submoduleResourceForeground': kzTheme('secondaryForeground'),

      'editorGutter.modifiedBackground': kzTheme('blue'),
      'editorGutter.addedBackground': kzTheme('green'),
      'editorGutter.deletedBackground': kzTheme('red'),

      'editorBracketHighlight.foreground1': kzTheme('cyan'),
      'editorBracketHighlight.foreground2': kzTheme('green'),
      'editorBracketHighlight.foreground3': kzTheme('orange'),
      'editorBracketHighlight.foreground4': kzTheme('magenta'),
      'editorBracketHighlight.foreground5': kzTheme('yellow'),
      'editorBracketHighlight.foreground6': kzTheme('blue'),

      'debugToolBar.background': background,
      'editor.stackFrameHighlightBackground': pick({ light: primer.yellow[1], dark: '#a707' }),
      'editor.focusedStackFrameHighlightBackground': pick({ light: primer.yellow[2], dark: '#b808' }),

      'peekViewEditor.matchHighlightBackground': pick({ dark: '#ffd33d33' }),
      'peekViewResult.matchHighlightBackground': pick({ dark: '#ffd33d33' }),
      'peekViewEditor.background': background,
      'peekViewResult.background': background,

      'settings.headerForeground': foreground,
      'settings.modifiedItemIndicator': primary,
      'welcomePage.buttonBackground': primer.gray[1],
      'welcomePage.buttonHoverBackground': primer.gray[2],

      'problemsErrorIcon.foreground': kzTheme('red'),
      'problemsWarningIcon.foreground': kzTheme('orange'),
      'problemsInfoIcon.foreground': kzTheme('blue'),

      'editorError.foreground': kzTheme('red'),
      'editorWarning.foreground': kzTheme('orange'),
      'editorInfo.foreground': kzTheme('blue'),
      'editorHint.foreground': kzTheme('green'),

      'editorGutter.commentRangeForeground': kzTheme('ignored'),
      'editorGutter.foldingControlForeground': kzTheme('secondaryForeground'),

      'editorInlayHint.foreground': punctuation,
      'editorInlayHint.background': '#00000000',

      'editorStickyScroll.background': activeBackground,
      'editorStickyScrollHover.background': activeBackground,

      'menu.separatorBackground': border,
    },
    semanticHighlighting: true,
    semanticTokenColors: {
      namespace: kzTheme('namespace'),
      property: kzTheme('property'),
      interface: kzTheme('interface'),
      type: kzTheme('interface'),
      class: kzTheme('class'),
    },
    tokenColors: [
      {
        scope: [
          'comment',
          'punctuation.definition.comment',
          'string.comment',
        ],
        settings: {
          foreground: kzTheme('comment'),
          fontStyle: 'italic',
        },
      },
      {
        scope: [
          'delimiter.bracket',
          'delimiter',
          'invalid.illegal.character-not-allowed-here.html',
          'keyword.operator.rest',
          'keyword.operator.spread',
          'keyword.operator.type.annotation',
          'keyword.operator.relational',
          'keyword.operator.assignment',
          'meta.brace',
          'meta.tag.block.any.html',
          'meta.tag.inline.any.html',
          'meta.tag.structure.input.void.html',
          'meta.type.annotation',
          'meta.embedded.block.github-actions-expression',
          'storage.type.function.arrow',
          'keyword.operator.type',
          'meta.objectliteral.ts',
          'punctuation',
        ],
        settings: {
          foreground: punctuation,
        },
      },
      {
        scope: [
          'constant',
          'entity.name.constant',
          'variable.language',
          'meta.definition.variable',
        ],
        settings: {
          foreground: kzTheme('constant'),
        },
      },
      {
        scope: ['entity', 'entity.name'],
        settings: {
          foreground: kzTheme('function'),
        },
      },
      {
        scope: 'variable.parameter.function',
        settings: {
          foreground,
        },
      },
      {
        scope: [
          'entity.name.tag',
          'tag.html',
        ],
        settings: {
          foreground: kzTheme('keyword'),
        },
      },
      {
        scope: 'entity.name.function',
        settings: {
          foreground: kzTheme('function'),
        },
      },
      {
        scope: [
          'keyword',
          'storage.type.class.jsdoc',
        ],
        settings: {
          foreground: kzTheme('keyword'),
        },
      },
      {
        scope: [
          'storage',
          'storage.type',
          'support.type.builtin',
          'constant.language.undefined',
          'constant.language.null',
        ],
        settings: {
          foreground: kzTheme('builtin'),
        },
      },
      {
        scope: [
          'text.html.derivative',
          'storage.modifier.package',
          'storage.modifier.import',
          'storage.type.java',
        ],
        settings: {
          foreground,
        },
      },
      {
        scope: [
          'string',
          'string punctuation.section.embedded source',
          'attribute.value',
        ],
        settings: {
          foreground: kzTheme('string'),
        },
      },
      {
        scope: [
          'punctuation.definition.string',
          'punctuation.support.type.property-name',
        ],
        settings: {
          foreground: kzTheme('string', '99'),
        },
      },
      {
        scope: 'support',
        settings: {
          foreground: kzTheme('property'),
        },
      },
      {
        scope: [
          'property',
          'meta.property-name',
          'meta.object-literal.key',
          'entity.name.tag.yaml',
          'attribute.name',
        ],
        settings: {
          foreground: kzTheme('property'),
        },
      },
      {
        scope: [
          'entity.other.attribute-name',
          'invalid.deprecated.entity.other.attribute-name.html',
        ],
        settings: {
          foreground: kzTheme('variable'),
        },
      },
      {
        scope: [
          'variable',
          'identifier',
        ],
        settings: {
          foreground: kzTheme('variable'),
        },
      },
      {
        scope: [
          'support.type.primitive',
          'entity.name.type',
        ],
        settings: {
          foreground: kzTheme('type'),
        },
      },
      {
        scope: 'namespace',
        settings: {
          foreground: kzTheme('namespace'),
        },
      },
      {
        scope: [
          'keyword.operator',
          'keyword.operator.assignment.compound',
          'meta.var.expr.ts',
        ],
        settings: {
          foreground: kzTheme('operator'),
        },
      },
      {
        scope: 'invalid.broken',
        settings: {
          fontStyle: 'italic',
          foreground: primer.red[7],
        },
      },
      {
        scope: 'invalid.deprecated',
        settings: {
          fontStyle: 'italic',
          foreground: primer.red[7],
        },
      },
      {
        scope: 'invalid.illegal',
        settings: {
          fontStyle: 'italic',
          foreground: primer.red[7],
        },
      },
      {
        scope: 'invalid.unimplemented',
        settings: {
          fontStyle: 'italic',
          foreground: primer.red[7],
        },
      },
      {
        scope: 'carriage-return',
        settings: {
          fontStyle: 'italic underline',
          background: pick({ light: primer.red[5], dark: primer.red[6] }),
          foreground: primer.gray[0],
          content: '^M',
        },
      },
      {
        scope: 'message.error',
        settings: {
          foreground: primer.red[3],
        },
      },
      {
        scope: 'string variable',
        settings: {
          foreground: kzTheme('string'),
        },
      },
      {
        scope: ['source.regexp', 'string.regexp'],
        settings: {
          foreground: kzTheme('regex'),
        },
      },
      {
        scope: [
          'string.regexp.character-class',
          'string.regexp constant.character.escape',
          'string.regexp source.ruby.embedded',
          'string.regexp string.regexp.arbitrary-repitition',
        ],
        settings: {
          foreground: kzTheme('string'),
        },
      },
      {
        scope: 'string.regexp constant.character.escape',
        settings: {
          foreground: kzTheme('yellow'),
        },
      },
      {
        scope: [
          'support.constant',
        ],
        settings: {
          foreground: kzTheme('constant'),
        },
      },
      {
        scope: [
          'constant.numeric',
          'number',
        ],
        settings: {
          foreground: kzTheme('number'),
        },
      },
      {
        scope: [
          'keyword.other.unit',
        ],
        settings: {
          foreground: kzTheme('builtin'),
        },
      },
      {
        scope: [
          'constant.language.boolean',
          'constant.language',
        ],
        settings: {
          foreground: kzTheme('boolean'),
        },
      },
      {
        scope: 'meta.module-reference',
        settings: {
          foreground: primary,
        },
      },
      {
        scope: 'punctuation.definition.list.begin.markdown',
        settings: {
          foreground: kzTheme('orange'),
        },
      },
      {
        scope: ['markup.heading', 'markup.heading entity.name'],
        settings: {
          fontStyle: 'bold',
          foreground: primary,
        },
      },
      {
        scope: 'markup.quote',
        settings: {
          foreground: kzTheme('interface'),
        },
      },
      {
        scope: 'markup.italic',
        settings: {
          fontStyle: 'italic',
          foreground,
        },
      },
      {
        scope: 'markup.bold',
        settings: {
          fontStyle: 'bold',
          foreground,
        },
      },
      {
        scope: 'markup.raw',
        settings: {
          foreground: primary,
        },
      },
      {
        scope: [
          'markup.deleted',
          'meta.diff.header.from-file',
          'punctuation.definition.deleted',
        ],
        settings: {
          background: primer.red[0],
          foreground: primer.red[7],
        },
      },
      {
        scope: [
          'markup.inserted',
          'meta.diff.header.to-file',
          'punctuation.definition.inserted',
        ],
        settings: {
          background: primer.green[0],
          foreground: primer.green[6],
        },
      },
      {
        scope: ['markup.changed', 'punctuation.definition.changed'],
        settings: {
          background: primer.orange[1],
          foreground: primer.orange[6],
        },
      },
      {
        scope: ['markup.ignored', 'markup.untracked'],
        settings: {
          foreground: primer.gray[1],
          background: primer.blue[6],
        },
      },
      {
        scope: 'meta.diff.range',
        settings: {
          foreground: pick({ light: primer.purple[5], dark: primer.purple[6] }),
          fontStyle: 'bold',
        },
      },
      {
        scope: 'meta.diff.header',
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: 'meta.separator',
        settings: {
          fontStyle: 'bold',
          foreground: primer.blue[6],
        },
      },
      {
        scope: 'meta.output',
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: [
          'brackethighlighter.tag',
          'brackethighlighter.curly',
          'brackethighlighter.round',
          'brackethighlighter.square',
          'brackethighlighter.angle',
          'brackethighlighter.quote',
        ],
        settings: {
          foreground: primer.gray[6],
        },
      },
      {
        scope: 'brackethighlighter.unmatched',
        settings: {
          foreground: primer.red[7],
        },
      },
      {
        scope: [
          'constant.other.reference.link',
          'string.other.link',
          'punctuation.definition.string.begin.markdown',
          'punctuation.definition.string.end.markdown',
        ],
        settings: {
          foreground: kzTheme('string'),
        },
      },
      {
        scope: [
          'markup.underline.link.markdown',
        ],
        settings: {
          foreground: secondaryForeground,
          fontStyle: 'underline',
        },
      },
      {
        scope: [
          'type.identifier',
        ],
        settings: {
          foreground: kzTheme('class'),
        },
      },
      {
        scope: [
          'entity.other.attribute-name.html.vue',
        ],
        settings: {
          foreground: kzTheme('function'),
        },
      },
      {
        scope: [
          'invalid.illegal.unrecognized-tag.html',
        ],
        settings: {
          fontStyle: 'normal',
        },
      },
    ],
    rules: [],
  }

  // monaco rules
  const rules: any[] = []

  theme.tokenColors.forEach(({ scope, settings }: any) => {
    for (const s of toArray(scope)) {
      rules.push({
        token: s,
        foreground: settings.foreground?.replace('#', ''),
      })
    }
  })

  theme.rules = rules as any

  return theme
}
