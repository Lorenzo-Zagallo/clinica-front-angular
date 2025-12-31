import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { PacientesService } from '../../core/services/pacientes.service';
import { DashboardData } from '../../core/models/dashboard.model';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [CommonModule, BaseChartDirective],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
    private service = inject(PacientesService);
    private router = inject(Router);

    dados: DashboardData | null = null;

    // Configuração do Gráfico (Bar Chart)
    public barChartData: ChartConfiguration<'bar'>['data'] = {
        labels: ['Faturamento', 'Média por Paciente'],
        datasets: [
            { data: [0, 0], label: 'Indicadores Financeiros (R$)', backgroundColor: ['#2563EB',]}
        ]
    };
    public barChartOptions: ChartOptions<'bar'> = { 
        responsive: true,
        maintainAspectRatio: false,
    };
    public barChartLegend = true;

    ngOnInit() {
        this.service.getDashboard().subscribe(res => {
            this.dados = res;

            // Atualiza o gráfico com dados reais
            this.barChartData = {
                labels: ['Faturamento Total', 'Média por Consulta'],
                datasets: [
                    {
                        data: [res.faturamentoTotal, res.mediaValorConsulta],
                        label: 'Valores em Reais (R$)',
                        backgroundColor: ['#3B82F6', '#10B981']
                    }
                ]
            };
        });
    }

    irParaListaPacientes() {
        this.router.navigate(['/pacientes']);
    }
}
