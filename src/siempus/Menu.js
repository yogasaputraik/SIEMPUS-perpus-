import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import Login from './login';
import Perpus from './Perpus';
import Tambah from './Tambah';
import Pinjam from './Pinjam';
import MenuBuku from './MenuBuku';
import newvie from './newvie';
import coba from './coba';


const AppNavigator = createStackNavigator(
        {
            Utama:Login,
            Home:Home,
            Perpus:Perpus,
            Tambah:Tambah,
            Pinjam:Pinjam,
            MenuBuku:MenuBuku,
            newvie:newvie,
            coba:coba,
        },
        {
            initialRouteName: "Utama"
        }
        );
export default createAppContainer(AppNavigator);