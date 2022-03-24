import { useCallback, useEffect, useState } from 'react'
import { doAxios } from '@/utils/api'
import { ICommonRequest } from 'types/api/common'
import { IModuleResponse, Module } from 'types/api/product'
import { IColumns } from 'types/components/tables'
import { moduleColumns } from '@/config/columns/product'
import Table from '@/components/UIComponents/Table'

const Module = () => {
  const [columns, setColumns] = useState<IColumns[]>(moduleColumns)
  const [rows, setRows] = useState<Module[]>([])
  const rowId = 'ridModl'

  const loadData = useCallback(async () => {
    const path = `product/module/modl/getList`
    const params: ICommonRequest = {
      pagingNo: 1,
      pagingSize: 12,
      pagingSort: "createDt DESC"
    }
    const data = await doAxios<IModuleResponse>(path, params)
    if (data?.module) {
      setRows(data?.module)  
    }
  }, [rows])

  useEffect(() => {
    loadData();
  }, [])

  return (
    <div>
      {/* <button type="button" onClick={() => loadData()}>ㅌㅅㅌ</button> */}
      <Table columns={columns} rows={rows} rowId={rowId} pageSize={12} /> 
    </div>
  );
};

export default Module;