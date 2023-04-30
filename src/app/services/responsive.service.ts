import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HostListener, Injectable } from '@angular/core';

export enum ScreenSize {
  Unknown = 'Unknown',
  XSmall = 'XSmall',
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large',
  XLarge = 'XLarge',
}
export enum Device {
  Unknown,
  Mobile,
  Tablet,
  Web,
}
export enum Orientation {
  Unknown,
  Portrait,
  Landscape,
}
export enum DeviceAndOrientation {
  Unknown = 'Unknown',
  HandsetPortrait = 'HandsetPortrait',
  HandsetLandscape = 'HandsetLandscape',
  TabletPortrait = 'TabletPortrait',
  TabletLandscape = 'TabletLandscape',
  WebPortrait = 'WebPortrait',
  WebLandscape = 'WebLandscape',
}

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  private _screenSize = ScreenSize.Unknown;
  private _deviceType = Device.Unknown;
  private _orientationType = Orientation.Unknown;

  // -- Accessors
  public get screenSize(): ScreenSize {
    return this._screenSize;
  }
  public get deviceType(): Device {
    return this._deviceType;
  }
  public get orientationType(): Orientation {
    return this._orientationType;
  }

  // -- Public Methods
  // Orientation
  public orientationPortrait(): boolean {
    return this._orientationType === Orientation.Portrait;
  }
  public orientationLandscape(): boolean {
    return this._orientationType === Orientation.Landscape;
  }
  // Device
  public deviceDesktop(): boolean {
    return this._deviceType === Device.Web;
  }
  public deviceTablet(): boolean {
    return this._deviceType === Device.Tablet;
  }
  public deviceMobile(): boolean {
    return this._deviceType === Device.Mobile;
  }
  // Screen Size (from smallest to largest)
  public isXSmall(): boolean {
    return this.screenSize === ScreenSize.XSmall;
  }
  public isSmall(): boolean {
    return this.screenSize === (ScreenSize.XSmall || ScreenSize.Small);
  }
  public isMedium(): boolean {
    return (
      this.screenSize ===
      (ScreenSize.XSmall || ScreenSize.Small || ScreenSize.Medium)
    );
  }
  public isLarge(): boolean {
    return (
      this.screenSize ===
      (ScreenSize.XSmall ||
        ScreenSize.Small ||
        ScreenSize.Medium ||
        ScreenSize.Large)
    );
  }
  public isXLarge(): boolean {
    return (
      this.screenSize ===
      (ScreenSize.XSmall ||
        ScreenSize.Small ||
        ScreenSize.Medium ||
        ScreenSize.Large ||
        ScreenSize.XLarge)
    );
  }

  // -- Private
  private readonly screenSizeMap = new Map([
    [Breakpoints.XSmall, ScreenSize.XSmall],
    [Breakpoints.Small, ScreenSize.Small],
    [Breakpoints.Medium, ScreenSize.Medium],
    [Breakpoints.Large, ScreenSize.Large],
    [Breakpoints.XLarge, ScreenSize.XLarge],
  ]);

  private readonly deviceAndOrientationMap = new Map([
    [Breakpoints.HandsetLandscape, DeviceAndOrientation.HandsetLandscape],
    [Breakpoints.HandsetPortrait, DeviceAndOrientation.HandsetPortrait],
    [Breakpoints.TabletPortrait, DeviceAndOrientation.TabletPortrait],
    [Breakpoints.TabletLandscape, DeviceAndOrientation.TabletLandscape],
    [Breakpoints.WebPortrait, DeviceAndOrientation.WebPortrait],
    [Breakpoints.WebLandscape, DeviceAndOrientation.WebLandscape],
  ]);

  constructor(private breakpointObserver: BreakpointObserver) {
    this.obtainResponsiveInfo();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: EventListener) {
    this.obtainResponsiveInfo();
  }

  private obtainResponsiveInfo() {
    this.checkScreenSize(this.breakpointObserver);
    this.checkDeviceTypeAndOrientation(this.breakpointObserver);
  }

  private checkScreenSize(breakpointObserver: BreakpointObserver): void {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this._screenSize =
              this.screenSizeMap.get(query) ?? ScreenSize.Unknown;
          }
        }
      });
  }

  private checkDeviceTypeAndOrientation(
    breakpointObserver: BreakpointObserver
  ): void {
    breakpointObserver
      .observe([
        Breakpoints.HandsetLandscape,
        Breakpoints.HandsetPortrait,
        Breakpoints.TabletLandscape,
        Breakpoints.TabletPortrait,
        Breakpoints.WebLandscape,
        Breakpoints.WebPortrait,
      ])
      .subscribe((result) => {
        let orientationTypes = Object.keys(Orientation).map((key) => key);
        let deviceTypes = Object.keys(Device).map((key) => key);

        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            let type =
              this.deviceAndOrientationMap.get(query) ??
              DeviceAndOrientation.Unknown;

            orientationTypes.forEach((element) => {
              if (type.indexOf(element) !== -1)
                this._orientationType = element as unknown as Orientation;
            });

            deviceTypes.forEach((element) => {
              if (type.indexOf(element) !== -1)
                this._deviceType = element as unknown as Device;
            });
          }
        }
      });
  }
}
