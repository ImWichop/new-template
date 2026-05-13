import { Component, inject, OnInit } from '@angular/core'
import { AvatarModule } from 'primeng/avatar'
import { BadgeModule } from 'primeng/badge'
import { MenubarModule } from 'primeng/menubar'
import { InputTextModule } from 'primeng/inputtext'
import { RippleModule } from 'primeng/ripple'
import { MenuItem } from 'primeng/api'
import { NgClass } from '@angular/common'
import { AppConfigurator } from '../app.configurator'
import { LayoutService } from '../../services/layout.service'
import { StyleClassModule } from 'primeng/styleclass'

@Component({
	selector: 'app-menu',
	templateUrl: './menu.html',
	styleUrl: './menu.css',
	standalone: true,
	imports: [
		AvatarModule,
		BadgeModule,
		MenubarModule,
		InputTextModule,
		RippleModule,
		NgClass,
		AppConfigurator,
		StyleClassModule,
	],
})
export class Menu implements OnInit {
	layoutService = inject(LayoutService)
	items: MenuItem[] | undefined
	ngOnInit() {
		this.items = [
			{
				label: 'Inicio',
				icon: 'pi pi-home',
			},
			{
				label: 'Clientes',
				icon: 'pi pi-search',
				badge: '3',
				items: [
					{
						label: 'Core',
						icon: 'pi pi-bolt',
						shortcut: '⌘+S',
					},
					{
						label: 'Blocks',
						icon: 'pi pi-server',
						shortcut: '⌘+B',
					},
					{
						separator: true,
					},
					{
						label: 'UI Kit',
						icon: 'pi pi-pencil',
						shortcut: '⌘+U',
					},
				],
			},
		]
	}

	toggleDarkMode() {
		this.layoutService.layoutConfig.update((state) => ({
			...state,
			darkTheme: !state.darkTheme,
		}))
	}
}
