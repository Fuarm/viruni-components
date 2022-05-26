const { cp, cd, exec, echo, exit } = require('shelljs')

cp('-R', 'src/components/', 'package')
cp('-R', 'plugin/', 'package')
cd('package')

if (exec('npm publish --registry http://127.0.0.1:4873/').code !== 0) {
  echo('Error: npm publish failed');
  exit(1);
} else {
  echo('🍺 publish 成功！')
}
