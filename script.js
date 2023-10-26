
const contentData = {
    summary: `
        <div>
            <u style='font-size: 25px; color: rgba(54, 162, 235, 0.5);'><strong>Technical</strong></u>
            <p>
                Highly skilled and versatile professional with expertise in both technical development and credit risk management. 
                With almost 20 years of experience in the industry, I bring a unique blend of analytical rigor, technical proficiency, and strategic acumen. 
                Proficient in Python, machine learning, and data analysis, I've spearheaded projects that have leveraged big data to drive organizational goals 
                and deliver actionable insights. My capabilities in web development also span a wide range of modern technologies, including React and SQL, 
                making me well-equipped to handle both front-end and back-end tasks seamlessly.
            </p>
            <br>
            <br>
            <u style='font-size: 25px; color: rgba(54, 162, 235, 0.5);'><strong>Credit Risk</strong></u>
            <p>
            
                On the credit risk front, my proficiency encompasses IFRS9, IRB approaches, and risk modeling. 
                I've executed model validation, impairment calculations, and regulatory compliance checks, along with developing 
                and monitoring risk mitigation strategies. Familiarity with SAS and SQL allows me to manipulate data 
                and create automated reporting systems efficiently. My ability to handle both the technical and managerial aspects of projects 
                makes me a strong asset for any team. My interdisciplinary skills enable me to bridge the gap between technical 
                and non-technical stakeholders, driving collaborative efforts towards successful outcomes.
            </p>
        </div>`,
    skills: '', // This will be replaced by the radar chart
    education: `
        <div style='text-align: center;'>
            <ul>
            <li>
                <strong style='font-size: 25px;'>M.Sc. in Mathematics</strong>
                <br>
                Budapest University of Technology and Economics
                <br>
                <span>2000 - 2005</span>
                <br>
                <br>
                <br>
            </li>
            <li>
                <strong style='font-size: 25px;'>Reinforcement Learning</strong>
                <br>
                Udacity
                <br>
                <span>2017 - 2018</span>
                <br>
                <br>
                <br>
            </li>
            <li>
                <strong style='font-size: 25px;'>NALU - Neural Arithmetic Logic Unit</strong>
                <br>
                Contribution in a NIPS 2019 paper
                <br>
                <span>Solving the problem of multiplying negative numbers</span>
            </li>
            </ul>
        </div>
        `,

    experience: `
        <div style='display: grid; grid-template: auto / 1fr 1fr; user-select: none;'>
                <div style='margin: 0 15px;'>
                    <u  id="dataScienceJob" style='font-size: 25px; color: rgba(54, 162, 235, 0.5);' class='pointer'><strong>Data Science / Credit Risk Consultant (2015 - )</strong></u>
                    <br>
                    <strong>Projects:</strong>
                    <br>
                    <br>

                    <u id="logileJob" class='pointer'>Logile, Dallas, TX, USA</u>
                    <br>
                    • Developing and maintaining machine learning models <br> to predict sales of retail stores.
                    <br>
                    <br>

                    <u id="RBSJob" class='pointer'>Royal Bank of Scotland, Edinburgh, UK</u>
                    <br>
                    • Developing and validating IFRS9 models, impairment calculations, <br> and regulatory compliance checks.
                    <br>
                    • Developing IRB models, PD, LGD, EAD models, <br> and regulatory compliance checks.
                    <br>
                    <br>

                    
                </div>
                <div style='margin: 0 15px;'>
                    <u id="LidlJob" class='pointer'>Lidl, Budapest, Hungary</u>
                    <br>
                    • Developing and maintaining machine learning models <br> to predict sales of retail stores.
                    <br>
                    <br>

                    <u id="PublishDriveJob" class='pointer'>PublishDrive, Budapest, Hungary</u>
                    <br>
                    • Developing machine learning models to categorize books.
                    <br>
                    <br>
                    
                    <u id="TimelinePIJob" class='pointer'>TimelinePI, Budapest, Hungary</u>
                    <br>
                    • Developing machine learning models to predict <br> the duration of business processes.
                    <br>
                    <br>

                    <u style='font-size: 25px; color: rgba(54, 162, 235, 0.5);' id="CreditRiskJob" class='pointer'><strong>Credit Risk Analyst, Manager, Head of Retail Risk (2006 - 2015)</strong></u>
                    <br>
                    <strong>Various Banks</strong>
                </div>
    </div>
        `,
};


document.addEventListener('DOMContentLoaded', function() {

    function renderRadarChart(canvas) {
        const ctx = canvas.getContext('2d');
        const skillsData = [
            { skill: "Python", value: 90 },
            { skill: "Data Analysis", value: 95 },
            { skill: "Machine Learning", value: 95 },
            { skill: "Web Development", value: 80 },
            { skill: "SQL", value: 85 },
            { skill: "Cloud Computing", value: 70 }
        ];
        const labels = skillsData.map(d => d.skill);
        const dataPoints = skillsData.map(d => d.value);
    
        const chartData = {
            labels: skillsData.map(d => d.skill),
            datasets: [{
              label: 'Skills',
              data: [90, 95, 95, 80, 85, 70],
              fill: true,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgb(255, 99, 132)',
              pointBackgroundColor: 'rgb(255, 99, 132)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(255, 99, 132)',
              pointRadius: 10,  // Set the size of the points
              pointHoverRadius: 15,  // Set the size of the points when hovered
            }]
          };
    
        
        new Chart(ctx, {
            type: 'radar',
            data: chartData,
            options: {
                aspectRatio: 2,
                scales: {
                    r: {
                        grid: {
                            color: 'rgba(150, 150, 150, 0.2)'
                        },
                        angleLines: {
                            color: 'rgba(150, 150, 150, 0.2)'
                        },
                        ticks: {
                            display: false
                        },
                        beginAtZero: true,
                        max: 100,
                        pointLabels: {
                            fontColor: '#ffffff',
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            title: function(context) {
                                return context[0].label;
                            },
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                label += context.parsed.r;
                                return '';
                            },
                            footer: function(context) {
                                const skill = context[0].label;
                                let footerText = '';
            
                                switch (skill) {
                                    case 'Python':
                                        footerText = `
        • Object-oriented programming
        • Data manipulation
        • Web scraping
        • API interactions
        • Async programming
        • Version control
                                        `;
                                        break;
                                    case 'Data Analysis':
                                        footerText = `
        • Data Visualization (Plotly / Matplotlib)
        • Data Manipulation (Pandas / Numpy)
        • Data Processing, Analysing (Sklearn / Tslearn)
        • Data Statistics (Scipy / Statsmodels)
        • Data Scraping (BeautifulSoup / Selenium)
        • Data Storage (SQL / NoSQL)
        • Export / Import data (CSV, Excel, JSON, SQL, etc.)
                                        `;
                                        break;
                                    case 'Machine Learning':
                                        footerText = `
        • Tree Ensemble (Random Forest, XGBoost, LightGBM, etc.)
        • Tensorflow / Keras / PyTorch
        • Structured Data (Regression, Classification, Clustering)
        • Natural Language Processing (Transformers, 
            word/sentence embedding, document categorization)
        • Time Series Analysis (LSTM, other RNN, Transformers)
        • Image Processing (VAE, GAN, U-Net, Diffusion)
                                        `;
                                        break;
                                    case 'Web Development':
                                        footerText = `
        • HTML, CSS, JS
        • React
        • Django / Flask backend API
        • Database management
        • Authorization
        • Payment setup
        • Data visualization
                                        `;
                                        break;
                                    case 'SQL':
                                        footerText = `
        • Queries
        • Views
        • Functions
        • Indexing
                                        `;
                                        break;
                                    case 'Cloud Computing':
                                        footerText = `
        • AWS EC2
        • AWS Lambda
        • AWS Athena
        • AWS Glue
        • Github / Gitlab / Bitbucket
                                        `;
                                        break;
                                    default:
                                        footerText = '';
                                }
            
                                return footerText;
                            }
                        }
                    },
                    legend: {
                        display: false
                    }
                },
                
            }
            
        });
    }

    function renderCreditRiskRadarChart(canvas) {
        const ctx = canvas.getContext('2d');
        const skillsData = [
            { skill: "IFRS9", value: 95 },
            { skill: "IRB", value: 90 },
            { skill: "Credit Risk Modelling", value: 95 },
            { skill: "Credit Risk Management", value: 85 },
            { skill: "SAS / SQL", value: 95 },
        ];
        const labels = skillsData.map(d => d.skill);
        const dataPoints = skillsData.map(d => d.value);
    
        const chartData = {
            labels: skillsData.map(d => d.skill),
            datasets: [{
              label: 'Skills',
              data: [95, 90, 95, 85, 95],
              fill: true,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgb(54, 162, 235)',
              pointBackgroundColor: 'rgb(54, 162, 235)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(54, 162, 235)',              
              pointRadius: 10,  // Set the size of the points
              pointHoverRadius: 15,  // Set the size of the points when hovered
            }]
          };
    
        
        new Chart(ctx, {
            type: 'radar',
            data: chartData,
            options: {
                aspectRatio: 2,
                scales: {
                    r: {
                        grid: {
                            color: 'rgba(150, 150, 150, 0.2)'
                        },
                        angleLines: {
                            color: 'rgba(150, 150, 150, 0.2)'
                        },
                        ticks: {
                            display: false
                        },
                        beginAtZero: true,
                        max: 100,
                        pointLabels: {
                            fontColor: '#ffffff',
                            font: {
                                size: 14
                            }
                        }
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            title: function(context) {
                                return context[0].label;
                            },
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                label += context.parsed.r;
                                return '';
                            },
                            footer: function(context) {
                                const skill = context[0].label;
                                let footerText = '';
                            
                                switch (skill) {
                                    case 'IFRS9':
                                        footerText = `
        • IFRS9 PD, LGD, EAD models
        • Impairment Models, Provisions
        • Model Validation
        • Model Monitoring
        • Regulatory Compliance
        • Stress Testing
                                        `;
                                        break;
                                    case 'IRB':
                                        footerText = `
        • Internal Ratings-Based Approach
        • PD, LGD, EAD models
        • Regulatory Compliance
        • Model Validation
        • Model Monitoring
                                        `;
                                        break;
                                    case 'Credit Risk Modelling':
                                        footerText = `
        • Application Scoring
        • Behavioural Scoring
        • Model Validation
        • Stress Testing
        • Risk Identification
                                        `;
                                        break;
                                    case 'Credit Risk Management':
                                        footerText = `
        • Risk Mitigation
        • Risk Assessment
        • Credit Scoring
        • Policy Development
        • Regulatory Compliance
                                        `;
                                        break;
                                    case 'SAS / SQL':
                                        footerText = `
        • Data Manipulation
        • Data Analysis
        • Automated Reporting
        • Data Storage
                                        `;
                                        break;
                                    default:
                                        footerText = '';
                                }
                            
                                return footerText;
                            }
                            
                        }
                    },
                    legend: {
                        display: false
                    }
                },
                
            }
            
        });
        
    }
    

    window.showContent = function(section) {
        document.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
        const buttons = document.querySelectorAll('.buttons button');
        buttons.forEach(button => {
            if (button.getAttribute('onclick') === `showContent('${section}')`) {
                button.classList.add('active');
            }
        });
        const contentBox = document.getElementById('contentBox');
        if (section === "skills") {
            contentBox.innerHTML = '';
    
            const skillsWrapper = document.createElement('div');
            skillsWrapper.className = 'skills-wrapper';
    
            const techSkillsWrapper = document.createElement('div');
            techSkillsWrapper.className = 'tech-skills-wrapper';
    
            const techSkillsHeader = document.createElement('h2');
            techSkillsHeader.innerText = 'Technical Skills';
            techSkillsWrapper.appendChild(techSkillsHeader);
    
            const techSkillsCanvas = document.createElement('canvas');
            techSkillsCanvas.width = 600;
            techSkillsCanvas.height = 300;
            techSkillsWrapper.appendChild(techSkillsCanvas);
    
            skillsWrapper.appendChild(techSkillsWrapper);
    
            const creditRiskSkillsWrapper = document.createElement('div');
            creditRiskSkillsWrapper.className = 'credit-risk-skills-wrapper';
    
            const creditRiskSkillsHeader = document.createElement('h2');
            creditRiskSkillsHeader.innerText = 'Credit Risk Analyst / Manager Skills';
            creditRiskSkillsWrapper.appendChild(creditRiskSkillsHeader);
    
            const creditRiskSkillsCanvas = document.createElement('canvas');
            creditRiskSkillsCanvas.width = 600;
            creditRiskSkillsCanvas.height = 300;
            creditRiskSkillsWrapper.appendChild(creditRiskSkillsCanvas);
    
            skillsWrapper.appendChild(creditRiskSkillsWrapper);
    
            contentBox.appendChild(skillsWrapper);
    
            renderRadarChart(techSkillsCanvas);
            renderCreditRiskRadarChart(creditRiskSkillsCanvas);
        } else {
            contentBox.innerHTML = contentData[section];

            function showPopup(content, event) {
                const popup = document.getElementById('info-popup');
                popup.innerHTML = content;
                // popup.style.left = event.clientX + 'px';
                // popup.style.top = event.clientY + 'px';
                popup.style.left = event.target.offsetLeft + 'px';
                popup.style.top = '300px';
                popup.style.display = 'block';
                const closeButton = popup.querySelector('button');
                if (closeButton) {
                  closeButton.addEventListener('click', function() {
                    popup.style.display = 'none';
                  });
                }
            }
            function showSmallPopup(content, event) {
                const popup = document.getElementById('small-popup');
                popup.innerHTML = content;
                popup.style.left = event.clientX + 'px';
                popup.style.top = event.clientY + 'px';
                popup.style.display = 'block';
                const closeButton = popup.querySelector('button');
                if (closeButton) {
                  closeButton.addEventListener('click', function() {
                    popup.style.display = 'none';
                  });
                }
            }
            function hidePopup() {
                const popup = document.getElementById('info-popup');
                popup.style.display = 'none';
            }
            function hideSmallPopup() {
                const popup = document.getElementById('small-popup');
                popup.style.display = 'none';
            }
            if (section === 'experience') {
                
                    const dataScienceJob = document.getElementById('dataScienceJob');
                    const logileJob = document.getElementById('logileJob');
                    const RBSJob = document.getElementById('RBSJob');
                    const LidlJob = document.getElementById('LidlJob');
                    const PublishDriveJob = document.getElementById('PublishDriveJob');
                    const TimelinePIJob = document.getElementById('TimelinePIJob');
                    const CreditRiskJob = document.getElementById('CreditRiskJob');
                
                    dataScienceJob.addEventListener('mouseover', function(e) {
                        const content = `click for more info`;
                        showSmallPopup(content, e);
                    })
                    logileJob.addEventListener('mouseover', function(e) {
                        const content = `click for more info`;
                        showSmallPopup(content, e);
                    })
                    RBSJob.addEventListener('mouseover', function(e) {
                        const content = `click for more info`;
                        showSmallPopup(content, e);
                    })
                    LidlJob.addEventListener('mouseover', function(e) {
                        const content = `click for more info`;
                        showSmallPopup(content, e);
                    })
                    PublishDriveJob.addEventListener('mouseover', function(e) {
                        const content = `click for more info`;
                        showSmallPopup(content, e);
                    })
                    TimelinePIJob.addEventListener('mouseover', function(e) {
                        const content = `click for more info`;
                        showSmallPopup(content, e);
                    })
                    CreditRiskJob.addEventListener('mouseover', function(e) {
                        const content = `click for more info`;
                        showSmallPopup(content, e);
                    })
                    dataScienceJob.addEventListener('click', function(e) {
                    hideSmallPopup();
                    const content = `<div><ul>
                    <li><strong>Diverse Project Involvement</strong>: Participated in multiple projects across various industries, including Logile, RBS, Lidl, PublishDrive, TimelinePI, and Credit Risk.</li>
                    <li><strong>Retail Sales Prediction</strong>: Engineered and maintained machine learning models to forecast sales in retail environments.</li>
                    <li><strong>Financial Modeling</strong>: Developed, validated, and maintained IFRS9 and IRB models, focusing on PD, LGD, EAD calculations and ensuring regulatory compliance.</li>
                    <li><strong>Content Categorization</strong>: Created machine learning models to classify books for PublishDrive.</li>
                    <li><strong>Process Duration Prediction</strong>: Built machine learning models to estimate the duration of business processes for TimelinePI.</li>
                  </ul>
                    <button class='pointer close'>X</button></div>`
                    showPopup(content, e);
                    });
                
                    logileJob.addEventListener('click', function(e) {
                        hideSmallPopup();
                    const content = `<div><ul>
                    <li><strong>Team Leadership</strong>: Managed a team of data scientists and analysts focused on building machine learning models for sales prediction in retail stores.</li>
                    <li><strong>Core Contribution</strong>: Developed machine learning models that serve as the basis for the company's work force management and inventory management solutions.</li>
                    <li><strong>Technical Proficiency</strong>: Utilized a wide range of machine learning algorithms including LightGBM, XGBoost, Random Forest, and advanced neural networks with transformer models. All implementations were done in Python.</li>
                    <li><strong>Performance Monitoring</strong>: Established a Tableau reporting system to monitor model performance and identify issues or outliers.</li>
                    <li><strong>Continuous Improvement</strong>: Regularly collected new features for model refinement and engaged in open communication with customers regarding our findings.</li>
                    <li><strong>Team Management</strong>: Oversaw day-to-day team activities and engaged in 1-on-1 brainstorming sessions for new model development.</li>
                  </ul><button class='pointer close'>X</button></div>`
                    showPopup(content, e);
                    });

                    RBSJob.addEventListener('click', function(e) {
                        hideSmallPopup();
                    const content = `<div><ul>
                    <li><strong>Innovative Modeling</strong>: Conceived and built a new IFRS9 model that leverages economic scenarios for stable risk assessment.</li>
                    <li><strong>Technical Proficiency</strong>: Developed the entire model in Python. Utilized PySpark for Logistic Regression due to large data sets.</li>
                    <li><strong>Data Management</strong>: Leveraged PyAthena for querying and storing data, ensuring efficient and secure data operations.</li>
                    <li><strong>Visual Analytics</strong>: Executed all data visualizations using Python-based tools, contributing to data-driven decision-making.</li>
                    <li><strong>Documentation</strong>: Spearheaded documentation efforts using MS Word to create a comprehensive guide for the model.</li>
                    <li><strong>Full Product Lifecycle</strong>: Engaged in the complete development cycle of various banking products including mortgage, personal loan, credit card, current account, business current account, and business loan.</li>
                    <li><strong>Loss Calculation</strong>: Responsible for all three components of loss calculation: Probability of Default (PD), Exposure at Default (EAD), and Loss Given Default (LGD).</li>
                    <li><strong>Ongoing Optimization</strong>: Involved in the continuous update of individual models, ensuring they stay relevant and accurate for over 4 years.</li>
                  </ul><button class='pointer close'>X</button></div>`
                    showPopup(content, e);
                    });

                    LidlJob.addEventListener('click', function(e) {
                        hideSmallPopup();
                        const content = `<div><ul>
                        <li><strong>Team Collaboration</strong>: Served as a Data Scientist in a team, focusing on modeling tasks akin to those performed in the Logile project.</li>
                        <li><strong>Retail Sales Prediction</strong>: Actively contributed to the development and maintenance of machine learning models aimed at forecasting retail sales.</li>
                        <li><strong>Modeling Techniques</strong>: Employed a variety of machine learning algorithms, such as random forests and gradient boosting, to enhance model performance.</li>
                        <li><strong>Data Integration</strong>: Collaborated with data engineers to ensure seamless integration of real-time sales data into the modeling pipeline.</li>
                        <li><strong>Performance Monitoring</strong>: Regularly evaluated model performance using various metrics to identify areas for improvement.</li>
                        <li><strong>Stakeholder Communication</strong>: Engaged with business analysts and managers to translate complex model findings into actionable business insights.</li>
                        <li><strong>Model Updates</strong>: Accountable for periodic model updates to adapt to changing market conditions and data landscapes.</li>
                      </ul><button class='pointer close'>X</button></div>`
                        showPopup(content, e);
                    });

                    PublishDriveJob.addEventListener('click', function(e) {
                        hideSmallPopup();
                        const content = `<div><ul>
                        <li><strong>Innovative Categorization</strong>: Engineered a book categorization algorithm using neural networks, which drew acquisition interest from competitors.</li>
                        <li><strong>Natural Language Processing</strong>: Utilized advanced NLP techniques to enable more accurate and nuanced categorization of books.</li>
                        <li><strong>Technological Upgrades</strong>: Recently updated the algorithm to incorporate large language models and sentence embeddings, resulting in improved model performance.</li>
                        <li><strong>Market Impact</strong>: The algorithm's success has had a notable influence on PublishDrive’s market positioning, contributing to increased competitiveness.</li>
                        <li><strong>Interdisciplinary Collaboration</strong>: Worked alongside marketing and product teams to understand customer needs and integrate feedback into the model.</li>
                        <li><strong>Chatbot Development</strong>: Created and fine-tuned a chatbot for customer interaction, further enhancing PublishDrive's user experience.</li>
                        <li><strong>Model Maintenance and Optimization</strong>: Continuously updated the algorithm based on new data and performance metrics, ensuring sustained accuracy and effectiveness.</li>
                      </ul><button class='pointer close'>X</button></div>`
                        showPopup(content, e);
                    });

                    TimelinePIJob.addEventListener('click', function(e) {
                        hideSmallPopup();
                        const content = `<div><ul>
                        <li><strong>Advanced Modeling</strong>: Employed a bi-directional LSTM with category embeddings, focusing on predicting both the outcome and length of various business processes.</li>
                        <li><strong>Model Complexity</strong>: Addressed the intricacies of business processes by integrating category embeddings into the LSTM model.</li>
                        <li><strong>Predictive Accuracy</strong>: Fine-tuned the model parameters to achieve high predictive accuracy for both process outcomes and durations.</li>
                        <li><strong>Cross-Functional Collaboration</strong>: Worked closely with other departments to gather relevant data and features for model training and validation.</li>
                        <li><strong>Model Maintenance</strong>: Responsible for periodic updates and optimizations to ensure the model stays accurate and relevant.</li>
                      </ul><button class='pointer close'>X</button></div>`
                        showPopup(content, e);
                    });

                    CreditRiskJob.addEventListener('click', function(e) {
                        hideSmallPopup();
                        const content = `<div><ol>
                        <li><strong>Car Finance Analyst (Budapest Bank, Hungary)</strong>
                          <ul>
                            <li><strong>Model Development</strong>: Created credit risk models, stress tests, and loss estimations.</li>
                            <li><strong>Product Pricing</strong>: Priced car finance products based on loss estimates.</li>
                            <li><strong>Tech Stack</strong>: Worked extensively with SAS and Excel for analysis.</li>
                          </ul>
                        </li>
                        <li><strong>Car Finance Risk Manager (Budapest Bank, Hungary)</strong>
                          <ul>
                            <li><strong>Decision Making</strong>: Responsible for making decisions on individual finance cases.</li>
                          </ul>
                        </li>
                        <li><strong>Data Science Team Member (Budapest Bank, Hungary)</strong>
                          <ul>
                            <li><strong>Capital Models</strong>: Contributed to building credit and operational risk models for the bank.</li>
                            <li><strong>Regulatory Meetings</strong>: Actively involved in defending models and capital requirements.</li>
                            <li><strong>Documentation</strong>: Ensured that both the models and their documentation met regulatory standards.</li>
                            <li><strong>All-Encompassing Modeling</strong>: Built PD, LGD, and EAD models for all banking products.</li>
                          </ul>
                        </li>
                        <li><strong>Head of Retail Risk (CIB Bank, Hungary)</strong>
                          <ul>
                            <li><strong>Management</strong>: Led the full retail team, overseeing all retail banking products.</li>
                            <li><strong>Reporting and Development</strong>: Created monthly reports and contributed to new product development.</li>
                            <li><strong>Regulatory Adaptation</strong>: Navigated through IRB changes, identified gaps, and proposed solutions.</li>
                            <li><strong>Collection Team Collaboration</strong>: Worked closely with the collection team for debt recovery.</li>
                          </ul>
                        </li>
                        <li><strong>Senior Data Analyst (Nottingham Building Society, UK)</strong>
                          <ul>
                            <li><strong>Data Analysis</strong>: Performed high-level data analysis for various banking operations.</li>
                          </ul>
                        </li>
                      </ol><button class='pointer close'>X</button></div>`
                        showPopup(content, e);
                    });

                    dataScienceJob.addEventListener('mouseout', function(e) {
                        hideSmallPopup()
                    });
                    logileJob.addEventListener('mouseout', function(e) {
                        hideSmallPopup()
                    });
                    RBSJob.addEventListener('mouseout', function(e) {
                        hideSmallPopup()
                    });
                    LidlJob.addEventListener('mouseout', function(e) {
                        hideSmallPopup()
                    });
                    PublishDriveJob.addEventListener('mouseout', function(e) {
                        hideSmallPopup()
                    });
                    TimelinePIJob.addEventListener('mouseout', function(e) {
                        hideSmallPopup()
                    });


        }
    }
    };
    showContent('summary');


});
