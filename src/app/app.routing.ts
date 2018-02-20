import {GameComponent} from './game/game.component';
import {Routes,RouterModule} from '@angular/router';

const routes:Routes = [
    {path:'',redirectTo:'game',pathMatch:'full'},
    {path:'game',component:GameComponent}
]

export const router = RouterModule.forRoot(routes);

