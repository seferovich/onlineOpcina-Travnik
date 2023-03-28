import { Route, Routes } from 'react-router-dom';
import Izvodi from './Izvodi';
import Uvjerenja from './Uvjerenja';
import Start from './Start';


export default function Opcina() {

  return (
      <Routes>
          <Route path='/' element={<Start />} />
          <Route path='/izvodi' element={<Izvodi />} />
          <Route path='/uvjerenja' element={<Uvjerenja />} />
      </Routes>
  )
}

