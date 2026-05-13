import { Component, signal } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ButtonModule } from 'primeng/button'
import { Menu } from '@/app/core/components/menu/menu'

@Component({
	selector: 'app-root',
	imports: [RouterModule, ButtonModule, Menu],
	templateUrl: './app.html',
	styleUrl: './app.css',
})
export class App {
	protected readonly title = signal('new-template')
}
