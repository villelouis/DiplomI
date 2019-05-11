<template>
    <el-table
            :data="tableData"
            style="width: 100%">
        <el-table-column v-for="(column,index) in columns"
                         :key="column.label"
                         :prop="column.prop"
                         :label="column.label"
                         :width="column.width===undefined?'140':column.width"
                         :fixed="index===0"
        >
        </el-table-column>
        <el-table-column
                label="Operations"
                :width="120"
                fixed="right"
        >
            <template slot-scope="scope">
                <el-button @click="handleClick" type="text" size="small">Detail</el-button>
                <el-button type="text" size="small">Edit</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    import console from 'console'

    /*
    // WAS IN DATA()
             tableData: [
                 {
                     date: '2016-05-03',
                     name: 'Tom',
                     address: 'No. 189, Grove St, Los Angeles'
                 }, {
                     date: '2016-05-02',
                     name: 'Tom',
                     address: 'No. 189, Grove St, Los Angeles'
                 }, {
                     date: '2016-05-04',
                     name: 'Tom',
                     address: 'No. 189, Grove St, Los Angeles'
                 }, {
                     date: '2016-05-01',
                     name: 'Tom',
                     address: 'No. 189, Grove St, Los Angeles'
                 }, {
                     date: '2016-05-08',
                     name: 'Tom',
                     address: 'No. 189, Grove St, Los Angeles'
                 }, {
                     date: '2016-05-06',
                     name: 'Tom',
                     address: 'No. 189, Grove St, Los Angeles'
                 }, {
                     date: '2016-05-07',
                     name: 'Tom',
                     address: 'No. 189, Grove St, Los Angeles'
                 }],

              */
    export default {
        name: "Table",
        data: function() {
            return {

                tableData: [
                    // {
                    //     something: '2016-05-03',
                    // }, {
                    //     something: 'Angeles',
                    // }
                ],
                columns: [
                    // {prop:"something",label:"something"},
                    // {prop:"something1",label:"something1"},
                    // {prop:"something2",label:"something2"},
                    // {prop:"something3",label:"something3"},
                    // {prop:"something4",label:"something4"},
                    // {prop:"something5",label:"something5"},
                    // {prop:"something6",label:"something6"},
                    // {prop:"something7",label:"something7"},
                    // {prop:"something8",label:"something8"},
                    // {prop:"something9",label:"something9"},
                    // {prop:"somethingx",label:"somethingx"},
                    // {prop:"somethingy",label:"somethingy"},
                    // {prop:"somethingz",label:"somethingz"},
                ],
                caption: ""
            }
        },
        created: function() {
            this.init();
        },
        methods: {
            init: function() {
                try {
                    let self = this;
                    this.getColumns();

                    this.$store.getCurrentTable([]).then((res) => {
                        console.log("Текущая таблица", res);
                        self.caption = res;
                    }).catch((e) => {
                        console.log("Произошла ошибка", e)
                    });

                    this.$store.getFullTablePath([]).then((res) => {
                        console.log("Путь к базе данных", res);
                        self.caption = res;
                    }).catch((e) => {
                        console.log("Произошла ошибка", e)
                    });

                    this.$store.asyncGetAllRecords([]).then((res) => {
                        console.log("Получены данные таблицы", res);
                        self.tableData = res;
                    }).catch((e) => {
                        console.log("Произошла ошибка", e)
                    });

                    this.$store.asyncGetAllTablesOfUser([]).then((res) => {
                        console.log("Получены все таблицы", res);
                        self.tableData = res;
                    }).catch((e) => {
                        console.log("Произошла ошибка", e)
                    });

                } catch (e) {
                    console.log("Произошла ошибка на этапе запуска", e)
                }
            },
            getColumns: function(){
                let self = this;
                try{
                    this.$store.asyncGetCurrentMETATABLE([]).then((res) => {
                        console.log("Текущая МЕТА-таблица", res);
                        let resList = [];
                        console.log("TITLE",res.columns);
                        for (let item in res.columns){
                            let title = res.columns[item];
                            resList.push({prop: title, label: title});
                        }
                        console.log(resList);
                        self.columns = resList;
                    }).catch((e) => {
                        console.log("Произошла ошибка", e)
                    });
                } catch (e) {
                    console.log(e)
                }

            },
            handleClick: function () {

            }
        }
    }
</script>

<style scoped>

</style>
