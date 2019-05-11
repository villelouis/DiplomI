<template>
    <el-table
            :data="tableData"
            style="width: 100%">
        <el-table-column v-for="column in columns"
                         :key="column.label"
                         :prop="column.prop"
                         :label="column.label">
        </el-table-column>
        <el-table-column fixed="right">
            <template slot-scope="scope">
                ... your delete button or whatever here...
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    import console from 'console'

    export default {
        name: "Table",
        data() {
            return {
                /*
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
                tableData: [],
                columns: [
                    {prop: "date", label: "Date", width: "180"},
                    {prop: "name", label: "Name", width: "180"},
                    {prop: "address", label: "Address"},
                    {prop: "SSS", label: "SSS"},
                ],
                caption: ""
            }
        },
        created() {
            this.init();
        },
        methods: {
            init() {
                try {
                    let self = this;
                    this.$store.asyncGetCurrentMETATABLE([]).then((res) => {
                        console.log("Текущая МЕТА-таблица", res);
                        self.caption = res;
                    }).catch((e) => {
                        console.log("Произошла ошибка", e)
                    });

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
            }
        }
    }
</script>

<style scoped>

</style>
