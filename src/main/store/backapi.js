import promiseIpc from 'electron-promise-ipc';
import TableManager from './TableManager.js'

promiseIpc.on('GETAAA', (arg) => {
    return db.asyncGetAllTables(arg)
});

const db = new TableManager();

export default {
    getCurrentUser: promiseIpc.on('getCurrentUser', (arg) => {
        return db.getCurrentUser(...arg)
    }),

    setCurrentUser: promiseIpc.on('setCurrentUser', (arg) => {
        return db.setCurrentUser(...arg)
    }),


    getFullTablePath: promiseIpc.on('getFullTablePath', (arg) => {
        return db.getFullTablePath(...arg)
    }),
// const ipc_getFullTablePath = ipcDecorator(db.getFullTablePath,"getFullTablePath")

    asyncSetCurrentTable: promiseIpc.on('asyncSetCurrentTable', (arg) => {
        return db.asyncSetCurrentTable(...arg)
    }),
// const ipc_asyncSetCurrentTable = ipcDecorator(db.asyncSetCurrentTable,"asyncSetCurrentTable")

    getCurrentTable: promiseIpc.on('getCurrentTable', (arg) => {
        return db.getCurrentTable(...arg)
    }),
// const ipc_getCurrentTable = ipcDecorator(db.getCurrentTable,"getCurrentTable")

    asyncGetAllTablesOfUser: promiseIpc.on('asyncGetAllTablesOfUser', (arg) => {
        return db.asyncGetAllTablesOfUser(...arg)
    }),
// const ipc_asyncGetAllTablesOfUser = ipcDecorator(db.asyncGetAllTablesOfUser,"asyncGetAllTablesOfUser")

    asyncGetAllTables: promiseIpc.on('asyncGetAllTables', (arg) => {
        return db.asyncGetAllTables(...arg)
    }),
// const ipc_asyncGetAllTables = ipcDecorator(db.asyncGetAllTables,"asyncGetAllTables")

    asyncRemoveTable: promiseIpc.on('asyncRemoveTable', (arg) => {
        return db.asyncRemoveTable(...arg)
    }),
// const ipc_asyncRemoveTable = ipcDecorator(db.asyncRemoveTable,"asyncRemoveTable")

    asyncAddRecord: promiseIpc.on('asyncAddRecord', (arg) => {
        return db.asyncAddRecord(...arg)
    }),
// const ipc_asyncAddRecord = ipcDecorator(db.asyncAddRecord,"asyncAddRecord")

    asyncGetRecord: promiseIpc.on('asyncGetRecord', (arg) => {
        return db.asyncGetRecord(...arg)
    }),
// const ipc_asyncGetRecord = ipcDecorator(db.asyncGetRecord,"asyncGetRecord")

    asyncGetAllRecords: promiseIpc.on('asyncGetAllRecords', (arg) => {
        return db.asyncGetAllRecords(...arg)
    }),
// const ipc_asyncGetAllRecords = ipcDecorator(db.asyncGetAllRecords,"asyncGetAllRecords")

    asyncRemoveRecord: promiseIpc.on('asyncRemoveRecord', (arg) => {
        return db.asyncRemoveRecord(...arg)
    }),
// const ipc_asyncRemoveRecord = ipcDecorator(db.asyncRemoveRecord,"asyncRemoveRecord")

    asyncUpdateRecord: promiseIpc.on('asyncUpdateRecord', (arg) => {
        return db.asyncUpdateRecord(...arg)
    })

}


