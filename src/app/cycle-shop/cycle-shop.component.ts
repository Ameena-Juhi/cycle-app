import { Component } from '@angular/core';
import { Cycle } from '../Cycle';
import { CycleServiceService } from '../cycle-service.service';

@Component({
  selector: 'app-cycle-shop',
  templateUrl: './cycle-shop.component.html',
  styleUrls: ['./cycle-shop.component.css']
})
export class CycleShopComponent {
  cycles: Cycle[] = [];
  count:number = 1;
  name:string = "";
  stock:number = 1;
  constructor(private cycleService: CycleServiceService){}

  ngOnInit(): void {
    this.cycleService.getAllCycles().subscribe(res => this.cycles = res);
  }

  onSelect(cycle:Cycle):void{
    this.cycleService.borrowCycle(cycle.id).subscribe(res => {
      this.cycles = res;
    });
  }

  onChoose(cycle:Cycle):void{
    this.cycleService.returnCycle(cycle.id).subscribe(res => this.cycles = res);
  }

  onClick(cycle:Cycle):void{
    this.cycleService.restockCycle(cycle.id,this.count).subscribe(res => this.cycles = res);
  }

  add(name:string,stock:number):void{
    this.cycleService.addCycle(name, stock).subscribe(res => {this.cycles = res});
  }

}
