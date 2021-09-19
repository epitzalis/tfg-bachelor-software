import {
  Component, ElementRef, Input, Renderer2, ViewChild,
} from '@angular/core'
import { Calculator } from './models/calculator.dto'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  @Input() public typeCalculator: Calculator = 'boole'

  @ViewChild('inputCalculator', { static: false }) inputCalculator: ElementRef<HTMLInputElement>

  constructor(
    private readonly renderer: Renderer2,
  ) {}

  get valueCalculator(): string {
    return this.inputCalculator.nativeElement.value
  }

  set valueCalculator(newValue: string) {
    this.renderer.setProperty(this.inputCalculator.nativeElement, 'value', newValue)
  }

  public onAddCharacter(character: string): void {
    const oldValue = this.valueCalculator
    this.valueCalculator = oldValue + character
  }

  public onBack(): void {
    this.valueCalculator = this.valueCalculator.slice(0, -1)
  }

  public onClear(): void {
    this.valueCalculator = ''
  }

  public onCalculate(): void {
    if (this.valueCalculator) {
      // TODO
    }
  }
}