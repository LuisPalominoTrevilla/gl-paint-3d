import * as Three from 'three';
import Constants from '../constants';

export default {
    create(type,params){
        if(params.color){
            if(typeof(params.color)=== 'string'){
                let colorValue = parseInt ( params.color.replace("#","0x"), 16 );
                params.color = colorValue;
            }
        }
        if(params.emissive){
            if(typeof(params.emissive)=== 'string'){
                let colorValue = parseInt ( params.emissive.replace("#","0x"), 16 );
                params.emissive = colorValue;
            }
        }
        if(params.specular){
            if(typeof(params.specular)=== 'string'){
                let colorValue = parseInt ( params.specular.replace("#","0x"), 16 );
                params.specular = colorValue;
            }
        }
        
        Object.keys(params).forEach( param => {
            if(typeof(params[param]) === 'string' ){
                if(!Constants[param]){
                    let loader = new Three.TextureLoader();
                    loader.load(
                        'textures/Render3.png',
                        function(texture){
                            console.log("Here ", texture);
                        },
                        undefined,
                        function(error){
                            console.log(error);
                        }
                    )
                    params[param]=null;
                }
            }
        });
        switch(type){
            case Constants.materials.lineBasic:{
                return new Three.LineBasicMaterial(params);
            }
            case Constants.materials.lineDashed:{
                return new Three.LineDashedMaterial(params);
            }
            case Constants.materials.meshBasic:{
                return new Three.MeshBasicMaterial(params);
            }
            case Constants.materials.meshDepth:{
                return new Three.MeshDepthMaterial(params);
            }
            case Constants.materials.meshDistance:{
                return new Three.MeshDistanceMaterial(params);
            }
            case Constants.materials.meshLambert:{
                return new Three.MeshLambertMaterial(params);
            }
            case Constants.materials.meshMatcap:{
                return new Three.MeshMatcapMaterial(params);
            }
            case Constants.materials.meshNormal:{
                return new Three.MeshNormalMaterial(params);
            }
            case Constants.materials.meshPhong:{
                console.log(params);
                return new Three.MeshPhongMaterial(params);
            }
            case Constants.materials.meshPhysical:{
                return new Three.MeshPhysicalMaterial(params);
            }
            case Constants.materials.meshStandard:{
                return new Three.MeshStandardMaterial(params);
            }
            case Constants.materials.meshToon:{
                return new Three.MeshToonMaterial(params);
            }
            case Constants.materials.points:{
                return new Three.PointsMaterial(params);
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
                return new Three.ShadowMaterial(params);
            }
            case Constants.materials.sprite:{
                return new Three.SpriteMaterial(params);
            }
        }
    }
}