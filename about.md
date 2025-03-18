---
layout: page
title: About me
comments: false
---

<link href="/assets/css/about.css" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
<!-- Add Chart.js -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<div class="about-container">
	<!-- Hero Section -->
	<section class="about-hero">
		<div class="profile-card">
			<img src="https://media.licdn.com/dms/image/v2/D4E03AQHCFpY8AB5XDw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1674418455399?e=1747872000&v=beta&t=3V34YeobNTkWHDjaChxYRLjnfXCg3EqpJ_bS-5xbm7c" alt="Puneet Singh Ludu">
			<h1>Machine Learning Architecture & Innovation</h1>
			<p class="tagline">Building Scalable AI Systems for Enterprise Impact</p>
		</div>
	</section>

	<!-- Charts Section -->
	<section class="charts-section" style="margin: 2rem 0;">
		<div class="charts-container" style="display: flex; gap: 2rem; justify-content: space-between; margin-top: 2rem;">
			<div class="chart-wrapper" style="flex: 1; min-height: 400px;">
				<canvas id="currentResponsibilities"></canvas>
			</div>
			<div class="chart-wrapper" style="flex: 1.5; min-height: 400px;">
				<canvas id="evolutionChart"></canvas>
			</div>
		</div>
	</section>

	<!-- Professional Overview -->
	<section class="story-section">
		<h2>Professional Overview</h2>
		<div class="story-content">
			<p>At TRDDC (Tata Research Development and Design Centre), I pioneered algorithms for event detection in time series data, developing a Shape Context-based solution that achieved 7% improvement over traditional methods like SAX and DTW. This work established my foundation in practical machine learning applications.</p>
			
			<p>My early contributions included architecting a Data Harmonization Framework (DHF) utilizing map-reduce for real-time enterprise data integration. These experiences shaped my approach to machine learning architecture: building robust, scalable systems that deliver measurable business value.</p>
		</div>
	</section>

	<!-- Professional Experience -->
	<section class="story-section">
		<h2>Leadership & Technical Innovation</h2>
		<div class="story-content">
			<div class="experience-block">
				<h3><i class="fa-solid fa-chart-line"></i> ML Architecture at Zillow</h3>
				<p>Leading the Zestimate team's machine learning architecture, where I spearheaded the development of an interactive Comparative Market Analysis (CMA) platform. This initiative leverages Siamese Neural Networks to provide data-driven valuation tools, establishing new revenue channels while enhancing user engagement.</p>
				<p>Orchestrated the modernization of our ML infrastructure through Python, Terraform, AWS, Kubeflow, and Metaflow, achieving $500k annual cost optimization and 95% reduction in operational incidents.</p>
			</div>

			<div class="experience-block">
				<h3><i class="fa-solid fa-gauge-high"></i> Revenue Optimization at OkCupid</h3>
				<p>Engineered subscription pricing optimization systems utilizing Wide & Deep learning architectures. Implemented comprehensive ML pipelines with Python, Keras, and TensorFlow, resulting in 6% revenue growth through systematic A/B testing and dynamic pricing strategies.</p>
			</div>

			<div class="experience-block">
				<h3><i class="fa-solid fa-database"></i> Enterprise Solutions at FactSet</h3>
				<p>Developed mission-critical systems including a CNN-based speaker identification platform for earnings calls, an ELMo/BiLSTM-powered company information extraction system, and an optimized document processing service achieving 66% performance improvement. Enhanced FactSet terminal's formula discovery, improving average rank precision from 5.6 to 2.3 through advanced language modeling.</p>
			</div>
		</div>
	</section>

	<!-- Technical Approach -->
	<section class="story-section">
		<h2>Technical Approach & Methodology</h2>
		<div class="story-content">
			<p>My approach to machine learning systems is founded on three core principles:</p>
			
			<div class="philosophy-grid">
				<div class="philosophy-card">
					<i class="fa-solid fa-lightbulb"></i>
					<h3>Performance-Driven Innovation</h3>
					<p>Focusing on quantifiable outcomes: from infrastructure cost optimization ($500k annual savings) to revenue enhancement (6% growth through ML-driven pricing).</p>
				</div>
				
				<div class="philosophy-card">
					<i class="fa-solid fa-diagram-project"></i>
					<h3>Architectural Excellence</h3>
					<p>Designing systems for scale and reliability, demonstrated through successful implementations in high-throughput environments at Zillow, OkCupid, and FactSet.</p>
				</div>
				
				<div class="philosophy-card">
					<i class="fa-solid fa-users-gear"></i>
					<h3>Technical Leadership</h3>
					<p>Contributing to the ML community through conference organization (MUFin Workshop at AAAI2023, PKDD2022) and mentorship initiatives.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Key Achievements -->
	<section class="story-section">
		<h2>Key Achievements</h2>
		<div class="story-content">
			<div class="impact-grid">
				<div class="impact-card">
					<div class="impact-header">
						<i class="fa-solid fa-chart-pie"></i>
						<h3>Enterprise ML Systems</h3>
					</div>
					<p>Architected and deployed an interactive CMA platform with real-time valuation capabilities, driving significant revenue growth through enhanced agent tooling and market analysis.</p>
				</div>

				<div class="impact-card">
					<div class="impact-header">
						<i class="fa-solid fa-microchip"></i>
						<h3>ML Infrastructure</h3>
					</div>
					<p>Implemented advanced speaker identification systems and document processing pipelines, achieving 20% operational efficiency improvement and 66% reduction in processing time.</p>
				</div>

				<div class="impact-card">
					<div class="impact-header">
						<i class="fa-solid fa-code-merge"></i>
						<h3>Open Source Development</h3>
					</div>
					<p>Developed high-impact tools including Lotion (2K+ GitHub stars), Romadeva (adopted by Translators Without Borders), and jTextBrew for advanced string matching.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Research & Development -->
	<section class="story-section">
		<h2>Research & Development</h2>
		<div class="story-content">
			<div class="research-grid">
				<div class="research-card">
					<h3><i class="fa-solid fa-book"></i> Academic Publications</h3>
					<ul>
						<li>Latent Attribute Inference in Social Networks (ACM Hypertext 2015)</li>
						<li>Gender Classification via Celebrity Network Analysis (CORR 2014)</li>
						<li>Automated Music Mood Classification System (IJCSI, 2010)</li>
					</ul>
				</div>
				<div class="research-card">
					<h3><i class="fa-solid fa-diagram-project"></i> Technical Projects</h3>
					<ul>
						<li>MUFin Workshop - Financial Uncertainty Modeling (AAAI2023, PKDD2022)</li>
						<li>Resume Analysis System - NLP-based Career Development Tool</li>
						<li>Quena - Large-scale Question Answering System (1.6M Document Index)</li>
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- Education -->
	<section class="story-section">
		<h2>Academic Background</h2>
		<div class="story-content">
			<div class="education-grid">
				<div class="education-card">
					<i class="fa-solid fa-graduation-cap"></i>
					<h3>M.S. Computer Science</h3>
					<p>State University of New York at Buffalo (2014)</p>
				</div>
				<div class="education-card">
					<i class="fa-solid fa-university"></i>
					<h3>B.Tech. Computer Science</h3>
					<p>Jaypee Institute of Information Technology (2010)</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Professional Network -->
	<section class="story-section">
		<h2>Professional Network</h2>
		<div class="story-content">
			<p>Open to discussions on machine learning architecture, system design, and innovative technical solutions.</p>
			
			<div class="social-links">
				<a href="https://github.com/puneetsl" target="_blank" title="View Technical Projects"><i class="fa-brands fa-github"></i></a>
				<a href="https://www.linkedin.com/in/puneetsl" target="_blank" title="Professional Network"><i class="fa-brands fa-linkedin"></i></a>
				<a href="https://www.kaggle.com/puneetsl" target="_blank" title="ML Competitions & Projects"><i class="fa-brands fa-kaggle"></i></a>
			</div>
		</div>
	</section>

	<!-- Role Evolution -->
	
</div>

<style>
.charts-section {
	background: #fff;
	padding: 2rem;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.chart-wrapper {
	background: #fff;
	padding: 1rem;
	border-radius: 8px;
	box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
	.charts-container {
		flex-direction: column;
	}
	.chart-wrapper {
		width: 100%;
		margin-bottom: 2rem;
	}
}
</style>

<script>
// Evolution Chart
const evolutionCtx = document.getElementById('evolutionChart').getContext('2d');
new Chart(evolutionCtx, {
	type: 'line',
	data: {
		labels: ['2011', '2013', '2015', '2017', '2019', '2021', '2023', '2025'],
		datasets: [{
			label: 'Coding',
			data: [35, 30, 25, 20, 18, 15, 12, 10],
			borderColor: '#FF6384',
			backgroundColor: '#FF6384',
			borderWidth: 3,
			pointRadius: 4,
			tension: 0.4
		}, {
			label: 'Architecture',
			data: [8, 12, 15, 20, 25, 28, 30, 32],
			borderColor: '#36A2EB',
			backgroundColor: '#36A2EB',
			borderWidth: 3,
			pointRadius: 4,
			tension: 0.4
		}, {
			label: 'MLOps',
			data: [12, 15, 18, 20, 20, 18, 15, 15],
			borderColor: '#FFCE56',
			backgroundColor: '#FFCE56',
			borderWidth: 3,
			pointRadius: 4,
			tension: 0.4
		}, {
			label: 'Modeling',
			data: [25, 22, 20, 18, 15, 12, 10, 10],
			borderColor: '#4BC0C0',
			backgroundColor: '#4BC0C0',
			borderWidth: 3,
			pointRadius: 4,
			tension: 0.4
		}, {
			label: 'Data',
			data: [10, 10, 10, 10, 10, 10, 10, 10],
			borderColor: '#9966FF',
			backgroundColor: '#9966FF',
			borderWidth: 3,
			pointRadius: 4,
			tension: 0.4
		}, {
			label: 'Leadership',
			data: [5, 6, 7, 8, 10, 12, 15, 15],
			borderColor: '#FF9F40',
			backgroundColor: '#FF9F40',
			borderWidth: 3,
			pointRadius: 4,
			tension: 0.4
		}, {
			label: 'Collaboration',
			data: [5, 5, 5, 4, 2, 5, 8, 8],
			borderColor: '#8AC24A',
			backgroundColor: '#8AC24A',
			borderWidth: 3,
			pointRadius: 4,
			tension: 0.4
		}]
	},
	options: {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			title: {
				display: true,
				text: 'Career Responsibility Evolution',
				font: {
					size: 16,
					weight: 'bold'
				},
				padding: 20
			},
			legend: {
				position: 'bottom',
				labels: {
					usePointStyle: true,
					padding: 10,
					boxWidth: 10,
					font: {
						size: 11
					}
				}
			},
			tooltip: {
				mode: 'index',
				intersect: false,
				backgroundColor: 'rgba(255, 255, 255, 0.9)',
				titleColor: '#000',
				bodyColor: '#000',
				borderColor: '#ddd',
				borderWidth: 1,
				padding: 10,
				boxPadding: 4
			}
		},
		scales: {
			y: {
				min: 0,
				max: 40,
				ticks: {
					stepSize: 10,
					callback: function(value) {
						return value + '%';
					}
				},
				grid: {
					color: 'rgba(0, 0, 0, 0.1)'
				}
			},
			x: {
				grid: {
					display: false
				}
			}
		},
		interaction: {
			mode: 'nearest',
			axis: 'x',
			intersect: false
		},
		elements: {
			line: {
				borderWidth: 3
			},
			point: {
				hoverRadius: 6,
				hoverBorderWidth: 2
			}
		}
	}
});

// Current Role Distribution
const currentCtx = document.getElementById('currentResponsibilities').getContext('2d');
new Chart(currentCtx, {
	type: 'doughnut',
	data: {
		labels: [
			'Architecture (32%)',
			'Leadership (15%)',
			'MLOps (15%)',
			'Strategy (15%)',
			'Coding (10%)',
			'Modeling (8%)',
			'Collaboration (5%)'
		],
		datasets: [{
			data: [32, 15, 15, 15, 10, 8, 5],
			backgroundColor: [
				'rgba(54, 162, 235, 0.8)',
				'rgba(255, 159, 64, 0.8)',
				'rgba(255, 206, 86, 0.8)',
				'rgba(75, 192, 192, 0.8)',
				'rgba(255, 99, 132, 0.8)',
				'rgba(153, 102, 255, 0.8)',
				'rgba(138, 194, 74, 0.8)'
			],
			borderColor: 'white',
			borderWidth: 2
		}]
	},
	options: {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			title: {
				display: true,
				text: 'Current Role Focus',
				font: {
					size: 16,
					weight: 'bold'
				}
			},
			legend: {
				position: 'right',
				labels: {
					usePointStyle: true,
					padding: 10,
					boxWidth: 10,
					font: {
						size: 11
					}
				}
			},
			tooltip: {
				callbacks: {
					label: function(context) {
						return context.raw + '%';
					}
				}
			}
		},
		cutout: '60%'
	}
});
</script>