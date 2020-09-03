// Copyright (c) 2020 8th Wall, Inc.
//
// app.js is the main entry point for your 8th Wall app. Code here will execute after head.html
// is loaded, and before body.html is loaded.
import {tapPlaceCursorComponent} from './tap-place-cursor'
// Register custom A-Frame components in app.js before the scene in body.html has loaded.
AFRAME.registerComponent('tap-place-cursor', tapPlaceCursorComponent)
document.onload = setTimeout(function () { alert('Tap on the floor to experience AR'); }, 5000);
var count = 0;

AFRAME.registerComponent('tap-action',{
        init: function(){
                this.el.addEventListener('click',function() {
                 const v = document.getElementById('vid1')
                 const b = document.getElementById('tap-but')
                 const c = document.getElementById('cursor')
                 v.click();
                 b.setAttribute("visible","false")
                 b.setAttribute('position', {x:1,y:-4,z:-4})
                 });
            }
         });

 AFRAME.registerComponent('tap-place', {
        init: function() {
          const ground = document.getElementById('ground')
          
          ground.addEventListener('click', event => {
            if(count === 0){
            const newElement = document.createElement('a-entity')
            // The raycaster gives a location of the touch in the scene
            const touchPoint = event.detail.intersection.point
            newElement.setAttribute('xrextras-play-video','video: #web1; canstop: true')
            newElement.setAttribute('geometry', 'primitive: plane; height:19; width:20')
            newElement.setAttribute('material','shader: chromakey; src: #web1; color: 0.1 0.9 0.2')
            touchPoint["y"]+=8.5
            newElement.setAttribute('position', touchPoint)
            newElement.setAttribute('rotation', '0'+'0'+'0')
            newElement.setAttribute('id', 'vid1')
            newElement.setAttribute('visible', 'true')
            count++;
            
            this.el.sceneEl.appendChild(newElement)
            
            const newElement2 = document.getElementById("tap-but")
            
            touchPoint["z"]+=0.2
            
            newElement2.setAttribute('position', touchPoint)
            newElement2.setAttribute('visible', 'true')
            
            } else if (count === 1){
           
           console.log("tigger")
            
         
            count++;
            }
            
            else {
              
            }
            
            

          })
        }
      })