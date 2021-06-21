import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
=======

>>>>>>> parent of 910f94b... firebase with bugs
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { GameComponent } from './game/game.component';
import { PlayerComponent } from './player/player.component';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { DialogAddPlayerComponent } from './dialog-add-player/dialog-add-player.component';
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { GameInfoComponent } from './game-info/game-info.component';
import {MatCardModule} from '@angular/material/card';
<<<<<<< HEAD
// import { AngularFireModule } from '@angular/fire';
// import { environment } from '../environments/environment'
=======
>>>>>>> parent of 54d623d... player added
=======
>>>>>>> parent of 910f94b... firebase with bugs

@NgModule({
  declarations: [
    AppComponent,
    StartScreenComponent,
    GameComponent,
<<<<<<< HEAD
    PlayerComponent,
    DialogAddPlayerComponent,
    GameInfoComponent
=======
    PlayerComponent
>>>>>>> parent of 54d623d... player added
  ],
  imports: [
<<<<<<< HEAD
   // AngularFireModule.initializeApp(environment.firebase),
=======
>>>>>>> parent of 910f94b... firebase with bugs
    BrowserModule,
<<<<<<< HEAD
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatCardModule
    
=======
    AppRoutingModule
>>>>>>> parent of 54d623d... player added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
