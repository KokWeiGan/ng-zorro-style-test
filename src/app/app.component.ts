import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    template: ` `
})
export class AppComponent implements OnInit {
    constructor(
        private router: Router,
        private modalSrv: NzModalService
    ) {}

    ngOnInit() {
        this.router.events.pipe(filter(evt => evt instanceof NavigationEnd)).subscribe(() => {
            this.modalSrv.closeAll();
        });
    }
}
