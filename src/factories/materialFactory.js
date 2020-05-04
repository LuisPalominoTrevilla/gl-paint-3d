import * as Three from 'three';
import Constants from '../constants';

export default {
    create(type,params){
        if(params.color){
            let colorValue = parseInt ( params.color.slice(0,-2).replace("#","0x"), 16 );
            params.color = colorValue;
        }
        switch(type){
            case Constants.materials.lineBasic:{
                return new Three.LineBasicMaterial(params);
            }
            case Constants.materials.lineDashed:{
                return new Three.LineDashedMaterial(params);
            }
            case Constants.materials.meshBasic:{
                console.log(params);
                return new Three.MeshBasicMaterial(params);
            }
            case Constants.materials.meshDepth:{
                console.log("Implementing...");
                break;
            }
            case Constants.materials.meshDistance:{
                console.log("Implementing...");
                break;
            }
            case Constants.materials.meshLambert:{
                console.log("Implementing...");
                break;
            }
            case Constants.materials.meshMatcap:{
                console.log("Implementing...");
                break;
            }
            case Constants.materials.meshNormal:{
                console.log("Implementing...");
                break;
            }
            case Constants.materials.meshPhong:{
                console.log("Implementing...");
                break;
            }
            case Constants.materials.meshPhysical:{
                console.log("Implementing...");
                break;
            }
            case Constants.materials.meshStandard:{
                console.log("Implementing...");
                break;
            }
            case Constants.materials.meshToon:{
                console.log("Implementing...");
                break;
            }
            case Constants.materials.points:{
                console.log("Implementing...");
                break;
            }
            case Constants.materials.rawShader:{
                console.log("Implementing...");
                break;
            }
            case Constants.materials.shader:{
                console.log("Implementing...");
                break;
            }
            case Constants.materials.shadow:{
                console.log("Implementing...");
                break;
            }
            case Constants.materials.sprite:{
                console.log("Implementing...");
                break;
            }
        }
    }
}