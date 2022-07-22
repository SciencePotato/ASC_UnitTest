"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Mocha = __importStar(require("mocha"));
var _a = Mocha.Runner.constants, EVENT_RUN_END = _a.EVENT_RUN_END, EVENT_TEST_FAIL = _a.EVENT_TEST_FAIL, EVENT_TEST_PASS = _a.EVENT_TEST_PASS, EVENT_TEST_BEGIN = _a.EVENT_TEST_BEGIN, EVENT_TEST_END = _a.EVENT_TEST_END;
var MyReporter = /** @class */ (function () {
    function MyReporter(runner) {
        var _this = this;
        this.failedResultsCluster = [];
        this.passedResultsCluster = [];
        var stats = runner.stats;
        runner.on(EVENT_TEST_BEGIN, function (test) {
            console.log("{{ B }}\u16BB".concat(test.title, "\u16BB"));
        });
        runner.on(EVENT_TEST_END, function (test) {
            console.log('{{ E }}');
        });
        runner.on(EVENT_TEST_PASS, function (test) {
            var parsedTitle = _this.parseTitle(test.title);
            var r = {
                input: '',
                title: '',
            };
            if ('input' in parsedTitle) {
                r.input = parsedTitle.input;
            }
            else {
                r.input = null;
                r.title = test.title;
            }
            r.title = parsedTitle.actualTitle;
            _this.passedResultsCluster.push(r);
        });
        runner.on(EVENT_TEST_FAIL, function (test, err) {
            var r = {
                title: '',
                fullTitle: '',
            };
            //? Test state
            switch (test.state) {
                case 'passed':
                    r.status = 'passed';
                    break;
                case 'failed':
                    r.status = 'failed';
                    break;
                default:
                    r.status = 'unknown';
                    break;
            }
            //? Test parent title
            r.fullTitle = test.fullTitle();
            var parsedTitle = _this.parseTitle(test.title);
            console.log('Parsed title:');
            console.log(parsedTitle);
            if ('input' in parsedTitle) {
                r.input = parsedTitle.input;
            }
            else {
                r.input = null;
            }
            r.title = parsedTitle.actualTitle;
            if (err.name === 'AssertionError') {
                //! Code  ran and has test results
                var obj = JSON.parse(JSON.stringify(err));
                r.given = obj.actual;
                r.expected = obj.expected;
                r.stack = obj.stack;
            }
            else {
                //! Code failed to run section
                r.status = 'errored';
                r.stack = err;
            }
            _this.failedResultsCluster.push(r);
        });
        runner.on(EVENT_RUN_END, function () {
            if (stats) {
                var fr = {
                    total: stats.tests,
                    passed: stats.passes,
                    failed: stats.failures,
                    start: stats.start,
                    end: stats.end,
                    details: {
                        failed: _this.failedResultsCluster,
                        passed: _this.passedResultsCluster,
                    },
                };
                console.dir(fr, { depth: 5 });
                // console.log(JSON.stringify(fr));
            }
            else {
                console.log(JSON.stringify({ message: 'Failed to report results' }));
            }
        });
    }
    MyReporter.prototype.parseTitle = function (s) {
        var LBI = s.indexOf('$$');
        var RBI = s.lastIndexOf('$$');
        var hasInputJSON = LBI !== -1 && RBI !== -1;
        var result = {
            actualTitle: '',
        };
        // console.log('has inputjson?', hasInputJSON);
        if (hasInputJSON) {
            var titleJSON = void 0;
            result.actualTitle = s.substring(0, LBI);
            try {
                titleJSON = JSON.parse(s.substring(LBI + 2, RBI));
            }
            catch (err) {
                //? discord log error here possibly
                // console.error(err);
            }
            if (titleJSON) {
                result['input'] = titleJSON;
            }
        }
        else {
            result.actualTitle = s;
        }
        return result;
    };
    return MyReporter;
}());
module.exports = MyReporter;
