import { useState } from 'react'
import {
  DataSheetGrid,
} from 'react-datasheet-grid'

import 'react-datasheet-grid/dist/style.css'

function Sheet() {
  const [ data, setData ] = useState('11111111111111111111')


  const columns = [
    { title: 'A' },
    { title: 'B' },
    { title: 'C' },
    { title: 'D' },
    { title: 'E' },
    { title: 'F' },
    { title: 'G' },
    { title: 'H' },
    { title: 'I', background: '#f6ffed', id: 'id' },
    { title: 'J' },
    { title: 'K' },
    { title: 'L' },
    { title: 'M' },
    { title: 'N' },
    { title: 'O' },
    { title: 'Q' },
    { title: 'R' },
    { title: 'S' },
    { title: 'T' }
  ]
  return (
      <>
        <DataSheetGrid
          value={data}
          onChange={setData}
          columns={columns}
        />      
      </>
  )
}

export default Sheet