import type { GetThemeOptions } from './helper'
import { createThemeHelpers } from './helper'
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
      newOperator: '#ed9cc2',
      stringLiteral: '#74ccaa',
      customLiteral: '#f6c177',
      numberLiteral: '#f6c177',
    },
    tokenColors: [
      {
        scope: ['comment', 'punctuation.definition.comment', 'string.comment'],
        settings: {
          foreground: v('comment'),
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
          foreground: v('punctuation'),
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
          foreground: v('constant'),
        },
      },
      {
        scope: ['entity', 'entity.name'],
        settings: {
          foreground: v('function'),
        },
      },
      {
        scope: 'variable.parameter.function',
        settings: {
          foreground: v('foreground'),
        },
      },
      {
        scope: ['entity.name.tag', 'tag.html'],
        settings: {
          foreground: v('keyword'),
        },
      },
      {
        scope: 'entity.name.function',
        settings: {
          foreground: v('function'),
        },
      },
      {
        scope: ['keyword', 'storage.type.class.jsdoc'],
        settings: {
          foreground: v('keyword'),
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
          foreground: v('builtin'),
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
          foreground: v('foreground'),
        },
      },
      {
        scope: [
          'string',
          'string punctuation.section.embedded source',
          'attribute.value',
        ],
        settings: {
          foreground: v('string'),
        },
      },
      {
        scope: [
          'punctuation.definition.string',
          'punctuation.support.type.property-name',
        ],
        settings: {
          foreground: v('string', '99'),
        },
      },
      {
        scope: 'support',
        settings: {
          foreground: v('property'),
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
          foreground: v('property'),
        },
      },
      {
        scope: [
          'entity.other.attribute-name',
          'invalid.deprecated.entity.other.attribute-name.html',
        ],
        settings: {
          foreground: v('variable'),
        },
      },
      {
        scope: ['variable', 'identifier'],
        settings: {
          foreground: v('variable'),
        },
      },
      {
        scope: ['support.type.primitive', 'entity.name.type'],
        settings: {
          foreground: v('type'),
        },
      },
      {
        scope: 'namespace',
        settings: {
          foreground: v('namespace'),
        },
      },
      {
        scope: [
          'keyword.operator',
          'keyword.operator.assignment.compound',
          'meta.var.expr.ts',
        ],
        settings: {
          foreground: v('operator'),
        },
      },
      {
        scope: 'invalid.broken',
        settings: {
          fontStyle: 'italic',
          foreground: paletteColor.red[7],
        },
      },
      {
        scope: 'invalid.deprecated',
        settings: {
          fontStyle: 'italic',
          foreground: paletteColor.red[7],
        },
      },
      {
        scope: 'invalid.illegal',
        settings: {
          fontStyle: 'italic',
          foreground: paletteColor.red[7],
        },
      },
      {
        scope: 'invalid.unimplemented',
        settings: {
          fontStyle: 'italic',
          foreground: paletteColor.red[7],
        },
      },
      {
        scope: 'carriage-return',
        settings: {
          fontStyle: 'italic underline',
          background: pick({ light: paletteColor.red[5], dark: paletteColor.red[6] }),
          foreground: paletteColor.gray[0],
          content: '^M',
        },
      },
      {
        scope: 'message.error',
        settings: {
          foreground: paletteColor.red[3],
        },
      },
      {
        scope: 'string variable',
        settings: {
          foreground: v('string'),
        },
      },
      {
        scope: ['source.regexp', 'string.regexp'],
        settings: {
          foreground: v('regex'),
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
          foreground: v('string'),
        },
      },
      {
        scope: 'string.regexp constant.character.escape',
        settings: {
          foreground: v('yellow'),
        },
      },
      {
        scope: ['support.constant'],
        settings: {
          foreground: v('constant'),
        },
      },
      {
        scope: ['constant.numeric', 'number'],
        settings: {
          foreground: v('number'),
        },
      },
      {
        scope: ['keyword.other.unit'],
        settings: {
          foreground: v('builtin'),
        },
      },
      {
        scope: ['constant.language.boolean', 'constant.language'],
        settings: {
          foreground: v('boolean'),
        },
      },
      {
        scope: 'meta.module-reference',
        settings: {
          foreground: v('primary'),
        },
      },
      {
        scope: 'punctuation.definition.list.begin.markdown',
        settings: {
          foreground: v('orange'),
        },
      },
      {
        scope: ['markup.heading', 'markup.heading entity.name'],
        settings: {
          fontStyle: 'bold',
          foreground: v('primary'),
        },
      },
      {
        scope: 'markup.quote',
        settings: {
          foreground: v('interface'),
        },
      },
      {
        scope: 'markup.italic',
        settings: {
          fontStyle: 'italic',
          foreground: v('foreground'),
        },
      },
      {
        scope: 'markup.bold',
        settings: {
          fontStyle: 'bold',
          foreground: v('foreground'),
        },
      },
      {
        scope: 'markup.raw',
        settings: {
          foreground: v('primary'),
        },
      },
      {
        scope: [
          'markup.deleted',
          'meta.diff.header.from-file',
          'punctuation.definition.deleted',
        ],
        settings: {
          background: paletteColor.red[0],
          foreground: paletteColor.red[7],
        },
      },
      {
        scope: [
          'markup.inserted',
          'meta.diff.header.to-file',
          'punctuation.definition.inserted',
        ],
        settings: {
          background: paletteColor.green[0],
          foreground: paletteColor.green[6],
        },
      },
      {
        scope: ['markup.changed', 'punctuation.definition.changed'],
        settings: {
          background: paletteColor.orange[1],
          foreground: paletteColor.orange[6],
        },
      },
      {
        scope: ['markup.ignored', 'markup.untracked'],
        settings: {
          foreground: paletteColor.gray[1],
          background: paletteColor.blue[6],
        },
      },
      {
        scope: 'meta.diff.range',
        settings: {
          foreground: pick({ light: paletteColor.purple[5], dark: paletteColor.purple[6] }),
          fontStyle: 'bold',
        },
      },
      {
        scope: 'meta.diff.header',
        settings: {
          foreground: paletteColor.blue[6],
        },
      },
      {
        scope: 'meta.separator',
        settings: {
          fontStyle: 'bold',
          foreground: paletteColor.blue[6],
        },
      },
      {
        scope: 'meta.output',
        settings: {
          foreground: paletteColor.blue[6],
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
          foreground: paletteColor.gray[6],
        },
      },
      {
        scope: 'brackethighlighter.unmatched',
        settings: {
          foreground: paletteColor.red[7],
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
          foreground: v('string'),
        },
      },
      {
        scope: ['markup.underline.link.markdown'],
        settings: {
          foreground: v('secondaryForeground'),
          fontStyle: 'underline',
        },
      },
      {
        scope: ['type.identifier'],
        settings: {
          foreground: v('class'),
        },
      },
      {
        scope: ['entity.other.attribute-name.html.vue'],
        settings: {
          foreground: v('function'),
        },
      },
      {
        scope: ['invalid.illegal.unrecognized-tag.html'],
        settings: {
          fontStyle: 'normal',
        },
      },
      // new
      {
        name: '分号、逗号',
        scope: [
          'punctuation.separator.comma',
          'punctuation.terminator.expression',
          'punctuation.terminator.statement',
          'punctuation.terminator.rule.scss',
          'meta.property-list.scss',
          'meta.property-list.scss',
          'meta.property-list.scss',
          'source.css.scss',
        ],
        settings: {
          foreground: paletteColor.gray[6],
        },
      },
      {
        name: 'CSS/SCSS 关键字',
        scope: ['keyword.control.at-rule'],
        settings: {
          foreground: paletteColor.blue[5],
        },
      },
      {
        name: 'this 关键字',
        scope: ['variable.language.this'],
        settings: {
          foreground: paletteColor.blue[2],
        },
      },
      {
        name: '注释/函数参数 斜体',
        scope: [
          'comment',
          'entity.name.variable.parameter',
          'meta.at-rule.function variable',
          'meta.at-rule.mixin variable',
          'variable.parameter',
        ],
        settings: {
          fontStyle: 'italic',
        },
      },
      {
        name: 'delete',
        scope: [
          'keyword.operator.expression.delete.ts',
        ],
        settings: {
          fontStyle: 'italic',
          foreground: paletteColor.red[3],
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
