import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({

  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']

})

export
class
AppComponent {

  title = 'appBootstrap';

    

  closeResult: string = '';

     

  /*------------------------------------------

  --------------------------------------------

  Created constructor

  --------------------------------------------

  --------------------------------------------*/

  constructor(private modalService: NgbModal) {} 

     

  /**

   * Write code on Method

   *

   * @return response()

   */

  open(content:any) {

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result: any) => {

      this.closeResult = `Closed with: ${result}`;

    }, (reason: any) => {

      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;

    });

  }

     

  /**

   * Write code on Method

   *

   * @return response()

   */

  private getDismissReason(reason: any): string {

    if
(reason === ModalDismissReasons.ESC) {

      return 'by pressing ESC';

    } else
if
(reason === ModalDismissReasons.BACKDROP_CLICK) {

      return 'by clicking on a backdrop';

    } else
{

      return `with: ${reason}`;

    }

  }

} 