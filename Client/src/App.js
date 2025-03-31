import { CssBaseline,ThemeProvider } from "@mui/material";
 import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
 import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "scenes/Layout";
 import { themeSettings } from "theme";
 import Dashboard from "scenes/Dashboard";
import Products from "scenes/Products/index";
import Customers from "scenes/Customers/Customers";
import Transaction from "scenes/Transaction/Transaction";
import Overview from "scenes/Ovreview";
import Daily from "scenes/daily";
import Monthly from "scenes/Monthly";
import Breakdown from "scenes/BreakDown";
import Admin from "scenes/admin";
import Performance from "scenes/performance";


function App() {
  const mode= useSelector((state)=> state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="App">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routes>
          <Route element={<Layout/>}>
          <Route path='/' element={<Navigate to ='/dashboard' replace/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/customers' element={<Customers/>}/>
          <Route path='/transactions' element={<Transaction/>}/>
          <Route path="/overview" element={<Overview />} />
          <Route path="/daily" element={<Daily />} />
          <Route path="/monthly" element={<Monthly />} />
          <Route path="/breakdown" element={<Breakdown />} />
          <Route path="/admin"element={<Admin/>}/>
          <Route path="/performance" element={<Performance/>}/>
          </Route>
        </Routes>
      </ThemeProvider>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
