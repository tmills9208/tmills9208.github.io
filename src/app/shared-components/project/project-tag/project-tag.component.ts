import { Component, Input, OnInit } from '@angular/core';
import { ProjectTag } from 'src/app/models/project';

@Component({
  selector: 'app-project-tag',
  templateUrl: './project-tag.component.html',
  styleUrls: ['./project-tag.component.scss'],
})
export class ProjectTagComponent implements OnInit {
  @Input() tag?: ProjectTag;
  public colorClass: string = '';
  public tagIcon: string = '';
  public svgIcon: boolean = false;
  public noIcon: boolean = false;

  constructor() {}

  ngOnInit(): void {
    if (!this.tag) return;
    this.setupTag();
    this.checkIfSvgIcon();
  }

  checkIfSvgIcon() {
    if (this.tagIcon && this.tagIcon != '') {
      if (this.tagIcon.startsWith('/') && this.tagIcon.endsWith('.svg')) {
        this.svgIcon = true;
      }
    }
    else {
      this.noIcon = false;
    }
  }

  // Mainly a switch-case function to determine properties,
  // Based on the input ProjectTag enum
  setupTag() {
    switch (this.tag) {
      case ProjectTag.dotNet:
        this.updateProperties(TagToColor.DotNet, '/assets/icons/windows.svg');
        break;
      case ProjectTag.dotNetCore:
        this.updateProperties(TagToColor.DotNet, '/assets/icons/windows.svg');
        break;
      case ProjectTag.rust:
        this.updateProperties(TagToColor.Rust, '/assets/icons/rust.svg');
        break;
      case ProjectTag.csharp:
        this.updateProperties(TagToColor.DotNet, '/assets/icons/windows.svg');
        break;
      case ProjectTag.unity:
        this.updateProperties(TagToColor.DotNet, '/assets/icons/unity.svg');
        break;
      case ProjectTag.angular:
        this.updateProperties(TagToColor.Angular, '/assets/icons/angular.svg');
        break;
      case ProjectTag.react:
        this.updateProperties(TagToColor.DotNet, '/assets/icons/react.svg');
        break;
      case ProjectTag.node:
        this.updateProperties(TagToColor.DotNet, '/assets/icons/node-js.svg');
        break;
      case ProjectTag.expressjs:
        this.updateProperties(TagToColor.DotNet, '/assets/icons/node-js.svg');
        break;
      case ProjectTag.rest_api:
        this.updateProperties(TagToColor.DotNet, '');
        break;
      case ProjectTag.public_api:
        this.updateProperties(TagToColor.DotNet, '');
        break;
      case ProjectTag.scss:
        this.updateProperties(TagToColor.Style, '/assets/icons/sass.svg');
        break;
      case ProjectTag.tailwind:
        this.updateProperties(TagToColor.Style, '/assets/icons/tailwind.svg');
        break;
      case ProjectTag.bootstrap:
        this.updateProperties(TagToColor.Style, '/assets/icons/bootstrap.svg');
        break;
      case ProjectTag.javascript:
        this.updateProperties(TagToColor.Rust, 'javascript');
        break;
      case ProjectTag.college:
        this.updateProperties(TagToColor.Informational, 'school')     
    }
  }

  updateProperties(tagToColor: TagToColor, icon: string) {
    this.colorClass = tagToColor as unknown as string;
    this.tagIcon = icon;
  }
}

// aligns with color-coded classnames in the project-tag.component.scss file.
enum Color {
  // Basic
  Red = 'red',
  Yellow = 'yellow',
  Orange = 'orange',
  Blue = 'blue',
  Cyan = 'cyan',
  Green = 'green',
  Purple = 'purple',
  White = 'white',
  Black = 'black',
  // Combinations (syntax: background-border)
  WhiteRed = 'white-red',
  RedWhite = 'red-white',
  WhiteCyan = 'white-cyan',
}

// align the tags with the above color enum and use this.
enum TagToColor {
  Deployed = Color.WhiteRed,
  // DotNet relates to techs from Microsoft, and platforms that utilize it like Unity3D
  DotNet = Color.Purple,
  Rust = Color.Orange,
  Angular = Color.Red,
  React = Color.WhiteCyan,
  Node = Color.Green,
  Style = Color.Green,
  Informational = Color.Blue,
}
