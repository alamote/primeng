import { Component } from '@angular/core';
import { MenuItem, MessageService } from '@alamote/primeng/api';
import { Code } from '../../domain/code';

@Component({
    selector: 'basic-doc',
    template: `
        <app-docsectiontext>
            <p>SplitButton has a default action button and a collection of additional options defined by the <i>model</i> property based on MenuModel API.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-toast></p-toast>
            <p-splitButton label="Save" (onClick)="save('info')" [model]="items"></p-splitButton>
        </div>
        <app-code [code]="code" selector="split-button-basic-demo"></app-code>
    `,
    providers: [MessageService]
})
export class BasicDoc {
    constructor(private messageService: MessageService) {
        this.items = [
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    this.update();
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-times',
                command: () => {
                    this.delete();
                }
            },
            { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' },
            { separator: true },
            { label: 'Installation', icon: 'pi pi-cog', routerLink: ['/installation'] }
        ];
    }

    items: MenuItem[];

    save(severity: string) {
        this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
    }

    code: Code = {
        basic: `<p-splitButton label="Save" (onClick)="save('info')" [model]="items"></p-splitButton>`,

        html: `
<div class="card flex justify-content-center">
    <p-toast></p-toast>
    <p-splitButton label="Save" (onClick)="save('info')" [model]="items"></p-splitButton>
</div>`,

        typescript: `
import { Component } from '@angular/core';
import { MenuItem, MessageService } from '@alamote/primeng/api';

@Component({
    selector: 'split-button-basic-demo',
    templateUrl: './split-button-basic-demo.html',
    providers: [ MessageService ]
})
export class SplitButtonBasicDemo {
    items: MenuItem[];

    constructor(private messageService: MessageService) {
        this.items = [
            {
                label: 'Update',
                icon: 'pi pi-refresh',
                command: () => {
                    this.update();
                }
            },
            {
                label: 'Delete',
                icon: 'pi pi-times',
                command: () => {
                    this.delete();
                }
            },
            { label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io' },
            { separator: true },
            { label: 'Installation', icon: 'pi pi-cog', routerLink: ['/installation'] }
        ];
    }

    save(severity: string) {
        this.messageService.add({ severity: severity, summary: 'Success', detail: 'Data Saved' });
    }

    update() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
    }

    delete() {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Deleted' });
    }
}`
    };
}
