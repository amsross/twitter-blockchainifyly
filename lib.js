const { declare, choice, opt, seq } = require('apep')
const { capitalizeFirst, match } = require('apep-std-transformations')
const { sepBy } = require('apep-std-sep')

const aOrAn = match()
  .case(/^[aeiou]/, x => 'an ' + x)
  .case(/.*/, x => 'a ' + x)

const people = declare(() => choice(
  'the alt right',
  'deplorables',
  'the illuminati',
  sepBy(' ',
    choice(
      'immitation',
      'fake',
      'albino',
      'blind',
      'white',
      'black'),
    'people')))

const company = capitalizeFirst(declare(self => seq(
  opt(self, 0.1),
  choice(
    'person',
    'fake',
    'smash',
    'money',
    'bond',
    'mc',
    'coin',
    'company'))))

const sector = declare(() => choice(
  'cheesburger',
  'forestry and fishing',
  'light industry',
  'heavy industry',
  'librarian',
  'industry',
  'investor',
  'lumberjack',
  'idiot',
  'sector'))

const customerDemographic = declare(() => choice(
  people,
  'customer demographic'))

const industryDemographic = declare(() => choice(
  people,
  'industry demographic'))

const customerIndustry = declare(() => choice(
  'stolen identities',
  'NERF',
  'Trump\'s cabinet',
  'the womb',
  'Australia',
  'Spain',
  'the digital divide',
  'bed',
  'the spirit realm',
  'other people\'s business',
  'dentistry',
  'customer industry'))

const tweet = declare(() =>
  seq(
    'We are excited to announce ',
    company,
    'Coin, ',
    aOrAn(sector),
    '-centric cryptocurrency to empower ',
    customerDemographic,
    ' and ',
    industryDemographic,
    ' to take greater control ',
    choice('in ', 'through '),
    customerIndustry,
    '!'))

module.exports = tweet
