// require('global-agent/bootstrap');
// global.GLOBAL_AGENT.HTTP_PROXY = 'http://127.0.0.1:7890';
const { Worker, isMainThread, parentPort, workerData } = require("worker_threads");
!isMainThread && workerData?.argv && (process.argv = workerData.argv);
const { parseArgs, until, wait, sleep, exit, confirm, petch, shell, mkdirp, fs, dayjs, Big, cryptojs, sqlite, rPwd, replaceStr, bJson, rInt, rIndex, log, nlog, blog, ListMap, isEmpty, isNumber, CcMap, rBigInt, rArr, consoleCode } = require("../utils/utils");
// const { scanApi } = require('./core/scan_api');
// const proxy = undefined;
const proxy = `http://127.0.0.1:7890`;
let args = !isMainThread && workerData?.args ? workerData.args : parseArgs((process.argv.slice(2)), { string: ['0x----'] });

(async () => {

    if (1) {
        const path = require('path')
        function handle({ currPath, parentPath }) {
            const files = fs.readdirSync(currPath, { withFileTypes: true });
            files.forEach(file => {
                const fullPath = path.join(currPath, file.name)
                if (file.isDirectory()) {
                    handle({ currPath: fullPath, parentPath: currPath });
                } else {
                    const ext = path.extname(file.name).substring(1);
                    if (['txt'].includes(ext.toLowerCase())) {
                        // const basePath = path.basename(currPath);
                        // console.log(newFilePath);
                        // fs.renameSync(fullPath, newFilePath);
                        const main = path.parse(file.name).name;
                        if (!main.startsWith('_')) {
                            console.log(main);
                            const content = fs.readFileSync(fullPath).toString();
                            const regex = new RegExp(`\\d+[^【]${main}([^\\s]+)`, 'gm');
                            const txts = [];
                            [...content.matchAll(regex)].forEach(e => {
                                let text = e[1];
                                text = text.replaceAll('干嘛', '干什么')
                                txts.push(text);
                            });
                            fs.writeFileSync(path.join(currPath, `_${file.name}`), txts.join('\r\n\r\n'))
                        }
                    }
                }
            })
        };
        handle({ currPath: `C:\\Users\\xxx\\Desktop\\xxx\\xxx\\xxx\\_CV台词` });
    }

})();