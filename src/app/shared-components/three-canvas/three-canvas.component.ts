import { ShaderfilesService } from './../../services/shaderfiles.service';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-three-canvas',
  templateUrl: './three-canvas.component.html',
  styleUrls: ['./three-canvas.component.scss'],
})
export class ThreeCanvasComponent implements OnInit, AfterViewInit {
  @ViewChild('canvas')
  private canvasRef!: ElementRef;
  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private camera!: THREE.OrthographicCamera;
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;

  private dim = {width: 0, height: 0};

  private uniforms = {
    iTime: { type: 'f', value: 0 },
    iResolution: { type: 'v2', value: new THREE.Vector2() }
  }

  @Input()
  public shader: string = "";

  public resetTime() {
    this.uniforms.iTime.value = 0;
  }

  constructor(private shaders: ShaderfilesService) {
  }

  private createShaderMesh() {
    // Get the shader string from the assets
    let shaderStr = '';
    this.shaders
      .getShaderFromAssets(this.shader)
      .subscribe((result) => {
        shaderStr = result;
      });

    // Setup shader material
    // let material = new THREE.ShaderMaterial({
    //   fragmentShader: shaderStr, 
    //   uniforms: this.uniforms
    // });
    let material = new THREE.MeshBasicMaterial({color: new THREE.Color(0xff0000)})

    // Final setup
    const PLANE_SIZE = 2;
    let planeMesh = new THREE.Mesh(new THREE.PlaneGeometry(PLANE_SIZE, PLANE_SIZE), material);
    return planeMesh;
  }

  private createScene() {
    // init scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x333333);

    // init objects
    let shaderMesh = this.createShaderMesh();
    this.scene.add(shaderMesh);

    // Init lights, camera
    this.initLights();
    this.initCamera();
  }

  private initCamera() {
    let width = this.dim.width;
    let height = this.dim.height;
    this.camera = new THREE.OrthographicCamera(-width/2, width/2, height/2, -height/2, 1, 1000);
    this.scene.add(this.camera);
  }

  private initLights() {
    let ambientLight = new THREE.AmbientLight(new THREE.Color(0xffffff), 1);
    this.scene.add(ambientLight);
  }

  private getWindowAspectRatio(): number {
    return window.innerWidth / window.innerHeight;
  }

  private render(time: number = 0) {
    time *= 0.0002;
    requestAnimationFrame(this.render);

    // Animate things
    this.uniforms.iTime.value = time;

    // Finish
    this.renderer.render(this.scene, this.camera);
  }

  private resize() {
    // reset dim first
    this.dim = {
      width: window.innerWidth,
      height: window.innerHeight,
    }
    let width = this.dim.width
    let height = this.dim.height;

    this.camera.left = -width/2;
    this.camera.right = width/2;
    this.camera.top = height/2;
    this.camera.bottom = -height/2;
    this.camera.updateProjectionMatrix();

    this.renderer.setPixelRatio(this.getWindowAspectRatio());
    this.renderer.setSize(width, height);

    this.uniforms.iResolution = {
      type: 'v2',
      value: new THREE.Vector2(width, height)
    }
  }

  private startRenderingLoop() {
    this.renderer = new THREE.WebGLRenderer({canvas: this.canvas});
    this.render();
  }

  ngOnInit(): void {
    this.render = this.render.bind(this);
  }
  ngAfterViewInit(): void {
    this.createScene();
    this.startRenderingLoop();
    window.addEventListener('resize', this.resize);
  }
}
