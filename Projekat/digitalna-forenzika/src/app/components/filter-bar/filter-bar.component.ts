import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Period, PeriodOptions } from "../../shared/enums/period";
import { Visualization, VisualizationOptions } from "../../shared/enums/visualization";

@Component({
    selector: 'filter-bar',
    templateUrl: './filter-bar.component.html',
    styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent{
    @Input() selectedPeriod = Period.Month;    
    @Input() selectedVisualization = Visualization.Messages;
    @Input() selectedYear: number = 2000;
    @Input() selectedMonth: number = 1;
    @Output() visualizationOptionChangedEmitter = new EventEmitter<Visualization>();
    @Output() periodOptionChangedEmitter = new EventEmitter<Period>();
    @Output() yearChangedEmitter = new EventEmitter<number>();
    @Output() monthChangedEmitter = new EventEmitter<number>();
    periods = Period;
    visualizationOptions = VisualizationOptions;
    periodOptions = PeriodOptions;

    visualizationChanged(visualization: Visualization): void{
        this.visualizationOptionChangedEmitter.emit(visualization);
    }

    periodChanged(period: Period): void{
        this.periodOptionChangedEmitter.emit(period);
    }

    yearChanged(event: Event): void{
        const year = +((event.target as HTMLInputElement).value);
        this.yearChangedEmitter.emit(year);
    }

    monthChanged(event: Event): void{
        const month = +((event.target as HTMLInputElement).value);
        this.monthChangedEmitter.emit(month);
    }
}