var fs = require('fs'),
  path = require('path'),
  _ = require('underscore');

var filePath = path.join(__dirname, 'youku-template.html');

function youkuMaps(args, content) {

  var template = fs.readFileSync(filePath).toString(),
    options = {};

  if (content.length) {
    var cont = content.split('\n');
    id = cont.shift();
  }

  // Output into 
  return _.template(template)({
    id: id,
    height: args[0] || 480,
    width: args[1] || 400
  });
}


hexo.extend.tag.register('youku', youkuMaps, {
  async: true,
  ends: true
});