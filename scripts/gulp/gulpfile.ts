import {task , series} from "gulp";
task('start:dev', series('clean', 'start:site'))
