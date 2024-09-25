import type { GetThemeOptions } from './helper'
import { createThemeHelpers, getRuleToken } from './helper'
import { toArray } from './utils'
import { VscodeThemeColorGenerator } from './vscodeThemeColor'

export default function getTheme(options: GetThemeOptions) {
  const {
    pick,
    v,
    paletteColor,
  } = createThemeHelpers(options)
  const themeColors = new VscodeThemeColorGenerator({
    v,
    pick,
    palette: paletteColor,
  })
  // https://code.visualstudio.com/api/references/theme-color
  const theme = {
    $schema: 'vscode://schemas/color-theme',
    name: options.name,
    base: pick({ light: 'vs', dark: 'vs-dark' }),
    colors: themeColors.buildColor(),
    semanticHighlighting: true,
    semanticTokenColors: {
      namespace: v('namespace'),
      property: v('property'),
      interface: v('interface'),
      type: v('interface'),
      class: v('class'),
      newOperator: pick({
        dark: '#ed9cc2',
        light: '#c05386',
      }),
      stringLiteral: pick({
        dark: '#74ccaa',
        light: '#377961',
      }),
      customLiteral: pick({
        dark: '#f6c177',
        light: '#c7792b',
      }),
      numberLiteral: pick({
        dark: '#f6c177',
        light: '#c7792b',
      }),
    },
    tokenColors: [
      /* String */
      getRuleToken('String', [
        'string',
        'string punctuation.section.embedded source',
        'attribute.value',
      ], v('string')),
      /* Number */
      getRuleToken('Number', [
        'keyword.operator.quantifier.regexp',
        'constant.numeric',
        'number',
      ], v('number')),

      getRuleToken('Boolean', [
        'constant.language.boolean',
      ], v('boolean')),

      getRuleToken('Namespace', [
        'namespace',
      ], v('namespace')),

      getRuleToken('Identifier', [
        'variable',
        'identifier',
        'support.variable',
        'support.class',
        'constant.language',
        'meta.definition.variable entity.name.function',
      ], v('variable')),

      getRuleToken('Keywords', [
        'keyword',
        'storage.type.class.jsdoc ',
        'modifier',
        'variable.language.this',
        'support.type.object',
      ], v('keyword'), 'bold'),

      getRuleToken('Function', [
        'variable.function',
      ], v('function')),

      getRuleToken('Function call', [
        'entity.name.function',
        'support.function',
      ], v('function')),

      getRuleToken('Storage', [
        'storage',
        'storage.type',
        'storage.modifier',
        'support.type.builtin',
        'constant.language.undefined',
        'constant.language.null',
        'constant.language.import-export-all.ts',
      ], v('builtin')),

      getRuleToken('Modules', [
        'support.module',
        'support.node',
      ], v('variable'), 'italic'),

      getRuleToken('Type', [
        'support.type',
        'entity.name.type',
        'entity.other.inherited-class',
        'support.type.primitive',
        'entity.name.type',
      ], v('type')),

      getRuleToken('Comment', [
        'comment',
        'punctuation.definition.comment',
        'string.comment',
      ], v('comment'), 'italic'),

      /* Class */
      getRuleToken('Class', [
        'entity.name.type.class',
      ], v('class'), 'underline'),

      getRuleToken('Class variable', [
        'variable.object.property',
        'meta.field.declaration entity.name.function',
      ], v('parameter')),

      getRuleToken('Class method', [
        'meta.definition.method entity.name.function',
      ], v('function')),

      getRuleToken('Function definition', [
        'meta.function entity.name.function',
      ], v('function')),

      getRuleToken('Function call', [
        'meta.function-call entity.name.function',
      ], v('function')),

      getRuleToken('Constant', [
        'constant',
        'entity.name.constant',
        'variable.language',
        'meta.definition.variable',
      ], v('constant')),

      getRuleToken('Template expression', [
        'template.expression.begin',
        'template.expression.end',
        'punctuation.definition.template-expression.begin',
        'punctuation.definition.template-expression.end',
      ], v('regex')),

      getRuleToken('YAML Key', ['entity.name.tag.yaml'], v('variable')),

      // JSON
      getRuleToken('JSON key', [
        'meta.object-literal.key',
        'meta.object-literal.key string',
        'support.type.property-name.json',
      ], v('variable')),
      getRuleToken('JSON constant', ['constant.language.json'], v('constant')),

      /* CSS */
      getRuleToken('CSS tag', ['entity.name.tag'], v('keyword')),
      getRuleToken('CSS class', ['entity.other.attribute-name.class'], v('class')),
      getRuleToken('CSS id', ['entity.other.attribute-name.id'], v('interface')),

      /* HTML */
      getRuleToken('HTML tag outline', ['meta.tag', 'punctuation.definition.tag'], v('keyword')),
      getRuleToken('HTML tag inner', ['entity.name.tag', 'tag.html'], v('type')),
      getRuleToken('HTML attribute', [
        'entity.other.attribute-name',
        'invalid.deprecated.entity.other.attribute-name.html',
      ], v('variable')),

      /* punctuation */
      getRuleToken('punctuation', [
        'delimiter.bracket',
        'delimiter',
        'invalid.illegal.character-not-allowed-here.html',
        'keyword.operator.rest',
        'keyword.operator.spread',
        'keyword.operator.type.annotation',
        'keyword.operator.relational',
        'keyword.operator.assignment',
        'keyword.operator.type',
        'meta.brace',
        'meta.tag.block.any.html',
        'meta.tag.inline.any.html',
        'meta.tag.structure.input.void.html',
        'meta.type.annotation',
        'meta.embedded.block.github-actions-expression',
        'storage.type.function.arrow',
        'meta.objectliteral.ts',
        'punctuation',
        'punctuation.definition.string.begin.html.vue',
        'punctuation.definition.string.end.html.vue',
      ], v('punctuation')),
      getRuleToken('', ['variable.parameter.function'], v('foreground')),

      /* html */
      getRuleToken('', [
        'text.html.derivative',
        'storage.modifier.package',
        'storage.modifier.import',
        'storage.type.java',
      ], v('foreground')),
      getRuleToken('', [
        'punctuation.definition.string',
      ], v('string', '77')),
      getRuleToken('', [
        'punctuation.support.type.property-name',
      ], v('property', '77')),

      getRuleToken('', [
        'support',
      ], v('property')),

      getRuleToken('', [
        'property',
        'meta.property-name',
        'meta.object-literal.key',
        'entity.name.tag.yaml',
        'attribute.name',
      ], v('property')),

      getRuleToken('', [
        'keyword.operator',
        'keyword.operator.assignment.compound',
        'meta.var.expr.ts',
      ], v('operator')),

      getRuleToken('', [
        'invalid.broken',
      ], paletteColor.red[7], 'italic'),

      getRuleToken('', [
        'invalid.deprecated',
      ], paletteColor.red[7], 'italic'),

      getRuleToken('', [
        'invalid.illegal',
      ], paletteColor.red[7], 'italic'),

      getRuleToken('', [
        'invalid.unimplemented',
      ], paletteColor.red[7], 'italic'),

      getRuleToken('', [
        'carriage-return',
      ], paletteColor.gray[0], 'italic underline'),

      getRuleToken('', [
        'message.error',
      ], paletteColor.red[3], 'italic'),

      getRuleToken('', [
        'source.regexp',
        'string.regexp',
      ], v('regex'), 'italic'),

      getRuleToken('', [
        'string.regexp.character-class',
        'string.regexp.source.ruby.embedded',
        'string.regexp.string.regexp.arbitrary-repitition',
      ], v('string')),

      getRuleToken('', [
        'string.regexp constant.character.escape',
      ], v('yellow')),

      getRuleToken('Constant', [
        'support.constant',
      ], v('constant')),

      getRuleToken('', [
        'keyword.other.unit',
      ], v('builtin')),

      getRuleToken('', [
        'meta.module-reference',
      ], v('primary')),

      getRuleToken('', [
        'punctuation.definition.list.begin.markdown',
      ], v('orange')),

      getRuleToken('', [
        'markup.heading',
        'markup.heading entity.name',
      ], v('primary'), 'bold'),

      getRuleToken('', [
        'markup.quote',
      ], v('interface')),

      getRuleToken('', [
        'markup.italic',
      ], v('foreground'), 'italic'),

      getRuleToken('', [
        'markup.bold',
      ], v('foreground'), 'bold'),

      getRuleToken('', [
        'markup.raw',
      ], v('primary')),

      getRuleToken('', [
        'markup.deleted',
        'meta.diff.header.from-file',
        'punctuation.definition.deleted',
      ], paletteColor.red[7]),

      getRuleToken('', [
        'markup.inserted',
        'meta.diff.header.to-file',
        'punctuation.definition.inserted',
      ], paletteColor.green[6]),

      getRuleToken('', [
        'markup.changed',
        'punctuation.definition.changed',
      ], paletteColor.orange[6]),

      getRuleToken('', [
        'markup.ignored',
        'markup.untracked',
      ], paletteColor.gray[1]),

      getRuleToken('', [
        'meta.diff.range',
      ], pick({ light: paletteColor.purple[5], dark: paletteColor.purple[6] }), 'bold'),

      getRuleToken('', [
        'meta.diff.header',
      ], paletteColor.blue[6]),

      getRuleToken('', [
        'meta.separator',
      ], paletteColor.blue[6], 'bold'),

      getRuleToken('', [
        'meta.output',
      ], paletteColor.blue[6]),

      getRuleToken('', [
        'brackethighlighter.tag',
        'brackethighlighter.curly',
        'brackethighlighter.round',
        'brackethighlighter.square',
        'brackethighlighter.angle',
        'brackethighlighter.quote',
      ], paletteColor.gray[6]),

      getRuleToken('', [
        'brackethighlighter.unmatched',

      ], paletteColor.red[6]),

      getRuleToken('', [
        'constant.other.reference.link',
        'string.other.link',
        'punctuation.definition.string.begin.markdown',
        'punctuation.definition.string.end.markdown',
      ], v('string')),

      getRuleToken('', [
        'markup.underline.link.markdown',
      ], v('secondaryForeground'), 'underline'),

      getRuleToken('', [
        'type.identifier',
        'constant.other.character-class.regexp',
      ], v('class')),

      getRuleToken('', [
        'entity.other.attribute-name.html.vue',
      ], v('function')),

      getRuleToken('Punctuation', [
        'punctuation.separator.comma',
        'punctuation.terminator.expression',
        'punctuation.terminator.statement',
        'punctuation.terminator.rule.scss',
        'meta.property-list.scss',
        'meta.property-list.scss',
        'meta.property-list.scss',
        'source.css.scss',
      ], paletteColor.gray[5]),

      getRuleToken('Punctuation Definition Method Parameters,punctuation Definition Function Parameters,punctuation Definition Parameters,punctuation Definition Separator,punctuation Definition Seperator,punctuation Definition Array', [
        'punctuation.definition.method-parameters',
        'punctuation.definition.function-parameters',
        'punctuation.definition.parameters',
        'punctuation.definition.separator',
        'punctuation.definition.seperator',
        'punctuation.definition.array',
      ], paletteColor.gray[6]),

      getRuleToken('Punctuation', [
        'keyword.control.at-rule',
      ], paletteColor.blue[5]),

      getRuleToken('', [
        'variable.other.generic-type.haskell',
      ], paletteColor.purple[5]),

      getRuleToken('js/ts punctuation separator key-value', [
        'punctuation.separator.key-value',
      ], pick({ light: '#7f848e', dark: '#abb2bf' })),

      getRuleToken('math js/ts', [
        'support.constant.math',
      ], v('class'), 'bold italic'),

      getRuleToken('math property js/ts', [
        'support.constant.math',
      ], v('property')),

      {
        name: '注释/函数参数 斜体',
        scope: [
          'entity.name.variable.parameter',
          'meta.at-rule.function variable',
          'meta.at-rule.mixin variable',
          'variable.parameter',
        ],
        settings: {
          fontStyle: 'italic',
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
