import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss'],
    imports: [CommonModule],
    standalone: true,
})
export class TestComponent implements OnInit {

    public classePaleta = "autocalculated";

    constructor() { }

    ngOnInit(): void { }

};
