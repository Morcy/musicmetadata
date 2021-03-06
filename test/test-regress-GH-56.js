var path = require('path')
var fs = require('fs')
var id3 = require('..')
var test = require('prova')

test('mp3 cbr calculation', function (t) {
  t.plan(2)

  var sample = (process.browser) ?
    new window.Blob([fs.readFileSync(__dirname + '/samples/regress-GH-56.mp3')])
    : fs.createReadStream(path.join(__dirname, '/samples/regress-GH-56.mp3'))

  id3(sample, {'duration': true}, function (err, result) {
    t.error(err)
    t.strictEqual(result.duration, 373, 'duration')
    t.end()
  })
})
