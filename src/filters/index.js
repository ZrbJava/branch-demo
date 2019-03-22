import { format } from "date-fns"
const Filters = {
    // 小数点大于2位的四舍五入并保留2位小数点
    toFixed2: (val) => {
        var temp = String(val);
        if (temp.indexOf(".") != -1) {
            if (temp.split(".")[1].length > 2) {
                return val.toFixed(2);
            } else {
                return val;
            }
        } else {
            return val;
        }
    },

    formatDate: (time) => {
        if(time == null){
            return "-------"
        }else{
            return format(new Date(time), "YYYY-MM-DD HH:mm:ss");
        }
    },
    formatDate1: (time) => {
        return format(new Date(time), "YYYY-MM-DD");
    }
}

export default Filters