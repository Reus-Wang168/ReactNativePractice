/**
 * Created by Rookie on 2017/12/26.
 */

const util = {
    selectSort: function(array) {
        for (let i = 0; i < array.length - 1; i++) {
            let k = i;
            for (let j = i + 1; j < array.length; j++) {
                if (array[j] < array[k]) {
                    k = j;
                }
            }
            if (k !== i) {
                let temp = array[i];
                array[i] = array[k];
                array[k] = temp;
            }
        }

        console.log("after sort==================");
        for (let i = 0; i < array.length; i++) {
            console.log(i + "  === " + array[i]);
        }
    },
    bubbleSort: function(array) {
        let flag = array.length - 1;
        while (flag > 0) {
            let n = flag;
            flag = 0;
            for (let j = 0; j < n; j++) {
                if (array[j] > array[j + 1]) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                    flag = j;
                }
            }
        }

        console.log("after sort==================");
        for (let i = 0; i < array.length; i++) {
            console.log(i + "  === " + array[i]);
        }
    },

    insertSort: function(array) {
        for (let i = 1; i < array.length; i++) {
            let j = i - 1;
            let temp = array[i];
            for (; j >= 0 && array[j] > temp; j--) {
                array[j + 1] = array[j];
            }
            array[j + 1] = temp;
        }
        console.log("after sort==================");
        for (let i = 0; i < array.length; i++) {
            console.log(i + "  === " + array[i]);
        }
    }
};

export default util;
