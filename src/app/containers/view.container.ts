import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';

import { ReadWriteService } from '../services/readwrite.service';

import 'rxjs/add/operator/filter';
import { Constants } from '../constants';

@Component({
    selector: 'view-page',
    template: `<view-component
    [letter]=letter
    [preview]=preview>
    </view-component>
    `,
})
export class ViewPageComponent implements OnInit{
    letter: any;
    preview: boolean;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private readWriteService: ReadWriteService 
      ) {}

    ngOnInit(){
        //note this can be navigated to either by /view/:id or /preview/:id
        //if the path starts with /preview set preview mode to true
        this.preview=this.router.url.startsWith('/preview')

        this.route.paramMap.subscribe((params: ParamMap) => {
            //get letter based on id
            this.readWriteService.retrieve(params.get('id'))
                .then((letter) => {
                    if(letter){
                        this.letter=letter;
                    }else{
                        //letter does not exist so redirect to compose page for now
                        //this.router.navigate(['/compose']);
                        this.letter=Constants.LETTER_NOT_FOUND;
                    }
                });
        });

    }
}