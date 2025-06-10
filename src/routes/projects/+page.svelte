<script lang="ts">
    //@ts-ignore
    import Navbar from "../../lib/components/Navbar.svelte";
    import Footer from "../../lib/components/Footer.svelte";
    import { onMount } from 'svelte';
    import ProjectCard from '../../lib/components/ProjectCard.svelte';
    import ProjectHeader from '../../lib/components/ProjectHeader.svelte';

    onMount(() => {
        console.log("Page mounted");
    });
</script>

<Navbar />

<main class="p-4 sm:p-6 bg-background text-primary font-sans min-h-screen">
    <!-- Page Container with Adjusted Max Width -->
    <div class="w-full max-w-5xl mx-auto px-4 sm:px-8 md:px-12 lg:px-24">
        <!-- Table of Contents -->
        <nav class="mb-6 px-4 sm:px-8 md:px-12 lg:px-6 py-4 rounded-md shadow-md text-white">
            <h2 class="text-sm sm:text-base font-semibold mb-2">Table of Contents</h2>
            <div class="pl-2 text-accent font-mono p-2 rounded-md text-xs sm:text-sm">
                <p>FastTrack’D Projects</p>
                <p class="pl-4">│── <a href="#schema-notes" class="text-blue-500 hover:underline">Schema Design</a></p>
                <p class="pl-4">│── <a href="#collections-notes" class="text-blue-500 hover:underline">Java Collections Showcase</a></p>
                <p class="pl-4">│── <a href="#fullstack-social-media-api" class="text-blue-500 hover:underline">Full Stack Social Media REST API</a></p>
                

                <p>SQL Projects/</p>
                <p class="pl-4">│── <a href="#sql-schema" class="text-blue-500 hover:underline">Database Schema Design</a></p>
                
                <p>Python Projects/</p>
                <p class="pl-4">│── <a href="#db-management" class="text-blue-500 hover:underline">Database Management System</a></p>
                <p class="pl-4">│── <a href="#ml-project" class="text-blue-500 hover:underline">Medical Insurance Cost Prediction</a></p>
                <p class="pl-4">│── <a href="#linear-regression-scratch" class="text-blue-500 hover:underline">gpa_year_experience</a></p>
                <p class="pl-4">│── <a href="#penguins-classification" class="text-blue-500 hover:underline">Penguin Species Classification</a></p>
                <p class="pl-4">│── <a href="#sea-level-predictor" class="text-blue-500 hover:underline">Sea Level Predictor</a></p>
                <p class="pl-4">│── <a href="#time-series-visualizer" class="text-blue-500 hover:underline">Time Series Visualizer</a></p>
                <p class="pl-4">│── <a href="#medical-data-visualizer" class="text-blue-500 hover:underline">Medical Data Visualizer</a></p>
                <p class="pl-4">│── <a href="#mean-variance-calculator" class="text-blue-500 hover:underline">Mean-Variance-Standard Deviation Calculator</a></p>
                <p class="pl-4">│── <a href="#search-algorithms" class="text-blue-500 hover:underline">Search Algorithms Implementation</a></p>
                <p class="pl-4">│── <a href="#smart-client" class="text-blue-500 hover:underline">HTTP/HTTPS SmartClient Implementation</a></p>
                
                <p>LeetCode Problems/</p>
                <p class="pl-4">│── <a href="#leetcode-1" class="text-blue-500 hover:underline">Leetcode #1. Two Sum</a></p>
                <p class="pl-4">│── <a href="#leetcode-14" class="text-blue-500 hover:underline">Leetcode #14. Longest Common Prefix</a></p>
                <p class="pl-4">│── <a href="#leetcode-35" class="text-blue-500 hover:underline">Leetcode #35. Search Insert Position</a></p>
                <p class="pl-4">│── <a href="#leetcode-167" class="text-blue-500 hover:underline">Leetcode #167. Two Sum II - Input Array Is Sorted</a></p>
                <p class="pl-4">│── <a href="#leetcode-1004" class="text-blue-500 hover:underline">Leetcode #1004. Max Consecutive Ones III</a></p>
                
                <p>Assembly Projects/</p>
                <p class="pl-4">│── <a href="#bitmap-display" class="text-blue-500 hover:underline">Bitmap Display Renderer</a></p>
            </div>
        </nav>


        <ProjectHeader
            title="FastTrack’D Projects"
            iconSrc="https://cooksys.com/wp-content/uploads/2024/05/Cook-Systems-IT-Staffing-Solutions-Logo.svg"
            iconAlt="FastTrack'D Logo"
            titleColor="#ff6f61"
        />

        <div class="space-y-6">
            <ProjectCard
                id="schema-notes"
                title="Schema Design"
                description="Designed a relational schema in PostgreSQL for managing people, locations, and interests."
                highlights={[
                    "Implemented a schema in PostgreSQL using PGAdmin for people, locations, and interests.",
                    "Utilized SELECT, UPDATE, INSERT, DELETE, WHERE, JOIN, GROUP BY, and ORDER BY statements.",
                    "Technologies: SQL, PostgreSQL, PGAdmin."
                ]}   
                codeSnippet={`-- Example: Table creation for people and locations
create table location(
	id serial primary key,
	city varchar(255) NOT NULL,
	--not every country uses states, but provinces, oblasks, etc are all functioanlyl equivalent
	state varchar(255) NOT NULL,
	country varchar(255) NOT NULL
);

--person table, 1 to many with location
create table person(
	id serial primary key,
	firstName varchar(50) NOT NULL,
	lastName varchar(50) NOT NULL,
	age smallint,
	location_id INTEGER REFERENCES location(id)
	
);

--person_interest table, many to one with person
--really, this is just a many-to-many iwth interest

create table interest(
	id serial primary key,
	title varchar(255) NOT NULL
);

create table person_interest(
	person_id INTEGER NOT NULL REFERENCES person(id),
	interest_id INTEGER NOT NULL REFERENCES interest(id),
	primary key (person_id, interest_id)
);

--HERE WE CAN BEGIN INSERTIONS
--insert location first
insert into location (city, state, country) 
values
	('Nashville', 'Tennessee', 'United States'),
	('Memphis', 'Tennessee', 'United States'),
	('Phoenix', 'Arizona', 'United States'),
	('Denver', 'Colorado', 'United States');`}
                downloadLink="https://github.com/fasttrackd-student-work/java-assignment-schema-design-naumgh"
                codeType="sql"
            />
    <ProjectCard
    id="collections-notes"
    title="Java Collections Showcase"
    description="Implemented an Employee management system using Java Collections. Utilized sets and maps in order to contain and reference employee objects as well as subsequent child objects Worker and Manager. Technologies: Eclipse, Java, Github."
    highlights={[
        "Implemented an Employee management system using Java Collections.",
        "Utilized sets and maps to manage Employee, Worker, and Manager objects.",
        "Designed methods to retrieve the full organizational hierarchy.",
        "Technologies: Eclipse, Java, Github.",
        "Full file available for download on Github!"
    ]}
    codeSnippet={`public Map<Manager, Set<Employee>> getFullHierarchy() {
    Map<Manager, Set<Employee>> res = new HashMap<>();
    for (Employee e : all_unique_employees) {
        if (e instanceof Manager) {
            Manager m = (Manager) e;
            Set<Employee> subordinates;
            if (worker_list.containsKey(m)) {
                subordinates = new HashSet<>(worker_list.get(m));
            } else {
                subordinates = new HashSet<>();
            }
            res.put(m, subordinates);
        }
    }
    return res;
}`}
    downloadLink="https://github.com/fasttrackd-student-work/java-assignment-collections-naumgh/blob/master/src/main/java/com/cooksys/ftd/assignments/collections/model/OrgChart.java"
    codeType="java"
/>

<ProjectCard
    id="fullstack-social-media-api"
    title="Full Stack Social Media REST API (Team Project)"
    description="Developed a production-grade RESTful social media API as part of a team, enabling user registration, tweet posting, likes, follows, and mentions using Spring Boot, JPA, and PostgreSQL. Implemented robust entity modeling, soft-deletion logic, and comprehensive many-to-many user relationships. Built secure, validated endpoints and applied clean architecture for maintainability and scalability."
    highlights={[
        "Collaborated in a team to build a RESTful social media API with user registration, tweet posting, likes, follows, and mentions.",
        "Implemented entity modeling with embedded credentials/profile and soft-deletion logic.",
        "Supported full many-to-many user relationships: followers/following, likes, and mentions.",
        "Built comprehensive validation, DTO mapping, and secure credential-based endpoints.",
        "Designed and tested endpoints with Postman, including edge case validation and global error handling.",
        "Applied clean architecture with service/repository layers, custom exceptions, and global error handling.",
        "Technologies: Java, Spring Boot, PostgreSQL, PGAdmin, JPA, Lombok, Maven, Postman, Eclipse, Github.",
        "Full project available on Github!"
    ]}
    codeSnippet={`public class TweetController {

    private final TweetService tweetService;
    
    @GetMapping
    public List<TweetResponseDto> getAllTweets() {
        return tweetService.getAllTweets();
    }
    
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public TweetResponseDto createTweet(@RequestBody TweetRequestDto tweetRequestDto) {
        return tweetService.createTweet(tweetRequestDto);
    }
    
    @GetMapping("/{id}")
    public TweetResponseDto getTweetById(@PathVariable Long id) {
        return tweetService.getTweetById(id);
    }
    
    @DeleteMapping("/{id}")
    public TweetResponseDto deleteTweet(@PathVariable Long id) {
        return tweetService.deleteTweet(id);
    }
    
    @GetMapping("/{id}/tags")
    public List<HashtagDto> getTagsByTweetId(@PathVariable Long id) {
        return tweetService.getTagsByTweetId(id);
    }
    
    @PostMapping("/{id}/like")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void likeTweet(@PathVariable Long id, @RequestBody CredentialsDto credentials) {
        tweetService.likeTweet(id, credentials);
    }
}
`}
    downloadLink="https://github.com/fasttrackd-student-work/spring-assessment-social-media-may-2025-team-2"
    codeType="java"
/>

  <!-- Project Cards -->

        <ProjectHeader
            title="SQL Projects"
            iconSrc="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"
            iconAlt="PostgreSQL Logo"
            titleColor="#336791"
        />
      
        <!-- Project Cards -->
        <div class="space-y-6">
            <ProjectCard
                id="sql-schema"
                title="Database Schema Design Showcase"
                description="Designed a relational database schema to manage campaigns, donations, volunteers, and expenses. Ensured data integrity using primary and foreign keys, while optimizing queries for efficient data retrieval."
                highlights={[
                    "Designed and normalized a relational database schema (3NF).",
                    "Implemented many-to-many relationships with junction tables.",
                    "Enforced referential integrity with foreign keys.",
                    "Created complex queries for data aggregation and retrieval.",
                    "Full file(s) available for download on Github!"
                ]}   
                codeSnippet={`--Some table Definition Examples

CREATE TABLE CAMPAIGN(
  CID bigint PRIMARY KEY,
  Name varchar(33) NOT NULL,
  campaignBudget real,
  mission text,
  startDate DATE,
  endDate DATE
);

CREATE TABLE DONATES(
  CID bigint,
  DID bigint,
  total real,
  PRIMARY KEY (CID, DID),
  FOREIGN KEY (CID) REFERENCES CAMPAIGN(CID),
  FOREIGN KEY (DID) REFERENCES DONATOR(DID)
);

CREATE TABLE VOLUNTEER (
  VID bigint PRIMARY KEY,
  Name varchar(33) NOT NULL,
  Email varchar(55) NOT NULL,
  tierLevel int,
  Salary real
);

-- Sample insertion into some of the tables

-- campaign
INSERT INTO CAMPAIGN VALUES (100,'green-love',  5000, 'to make trees great again', '2024-03-18', '2024-04-18');
INSERT INTO CAMPAIGN VALUES (101,'generic-protest', 4000, 'we are just protesting to protest', '2024-02-11', '2024-03-02');
INSERT INTO CAMPAIGN VALUES (102, 'idk',  2000,'idk im having trouble coming up with mission statements', '2024-01-02', '2024-02-02');
INSERT INTO CAMPAIGN VALUES (103,'final-countdown',500,'this is the final countdown', '2024-01-02', '2024-02-02');
INSERT INTO CAMPAIGN VALUES (104,'i-just-want-to-slide',2055,'parties in the sky like its 2055', '2055-01-02', '2055-02-02');
-- volunteer
INSERT INTO VOLUNTEER VALUES (927502, 'Clark Davidson', 'clark@gmail.com', 2, 35);
INSERT INTO VOLUNTEER VALUES (927503, 'Dave Hoffman', 'dave@gmail.com',1,NULL);
INSERT INTO VOLUNTEER VALUES (927504, 'Ava Huntington', 'ava@gmail.com', 1,  NULL);
INSERT INTO VOLUNTEER VALUES (927505, 'Clack Clarkson', 'clack@gmail.com',2, NULL);
INSERT INTO VOLUNTEER VALUES (927506, 'Black White', 'black@gmail.com',1,NULL );
INSERT INTO VOLUNTEER VALUES (927507, 'Ivan Naskov', 'ots@gmail.com',2, NULL);
INSERT INTO VOLUNTEER VALUES (927508, 'Debil Naskov', 'Debil@gmail.com',1, NULL);`}
                downloadLink="https://github.com/naumgh/projectsAndSchool/blob/main/csc370-Database-Systems/coursework/gng-construct.sql"
                codeType="sql"
            />

            <ProjectHeader
                title="Python Projects"
                iconSrc="https://www.vectorlogo.zone/logos/python/python-icon.svg"
                iconAlt="Python Logo"
                titleColor="#306998"
            />
            <ProjectCard
                id="db-management"
                title="Database Management System"
                description="A Python-based interactive application for managing campaign, volunteer, donation, and event data, backed by PostgreSQL. Includes modular design, advanced SQL queries, and intuitive data visualization."
                highlights={[
                    "Utilized Psycopg2 for robust PostgreSQL database connections and query execution.",
                    "Designed modular, class-based architecture for maintainability and scalability.",
                    "Implemented dynamic CRUD operations for campaigns, volunteers, and events.",
                    "Created ASCII-based visualizations for financial insights (inflows, outflows, budgets).",
                    "Handled complex SQL queries with Common Table Expressions (CTEs) for data aggregation.",
                    "Incorporated input validation and transaction rollbacks for error handling and data integrity.",
                    "Full file(s) available for download on Github!"
                ]}
                codeSnippet={`# Sample Code: Insert Donations with ON CONFLICT Handling
  
def insertIntoDonatesTable(self):
    tuple_data = (chooseCID, chooseDID, total)
    campaign_data = [tuple_data]
    campsql = """
    INSERT INTO DONATES (CID, DID, total) VALUES (%s, %s, %s)
    ON CONFLICT (CID, DID) DO UPDATE
    SET total = DONATES.total + EXCLUDED.total
    """
    try:
        cursors['cursor6'].executemany(campsql, campaign_data)
        dbconn.commit()
        print("Inserted successfully")
    except psycopg2.Error as e:
        dbconn.rollback()
        print("Error inserting into DONATES table:", e)`}
                downloadLink="https://github.com/naumgh/projectsAndSchool/blob/main/csc370-Database-Systems/coursework/gng.py"
                codeType="python"
            />
            <ProjectCard
                id="ml-project"
                title="Medical Insurance Cost Prediction"
                description="A machine learning pipeline to predict insurance costs based on patient demographics using Scikit-Learn, Pandas, and NumPy. Includes feature engineering, model training, and cross-validation."
                highlights={[
                    "Implemented a full Scikit-Learn preprocessing pipeline with StandardScaler and OneHotEncoder.",
                    "Utilized DecisionTreeRegressor and RandomForestRegressor for cost prediction.",
                    "Performed hyperparameter tuning with RandomizedSearchCV for model optimization.",
                    "Applied log transformation to normalize skewed distributions.",
                    "Engineered features based on regional, lifestyle, and demographic factors.",
                    "Integrated cross-validation to improve model generalization.",
                    "Full file(s) available for download on Github!"
                ]}
                codeSnippet={`# Scikit-Learn Preprocessing Pipeline for Insurance Cost Prediction

from sklearn.compose import ColumnTransformer
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler, OneHotEncoder
from sklearn.pipeline import make_pipeline
from sklearn.linear_model import LinearRegression

# Define numerical and categorical attributes
num_attribs = ["age", "bmi", "children"]
cat_attribs = ["sex", "smoker", "region"]

# Create transformation pipelines
num_pipeline = make_pipeline(SimpleImputer(strategy="median"), StandardScaler())
cat_pipeline = make_pipeline(SimpleImputer(strategy="most_frequent"), OneHotEncoder(handle_unknown="ignore"))

# Combine pipelines using ColumnTransformer
preprocessing = ColumnTransformer([
    ("num", num_pipeline, num_attribs),
    ("cat", cat_pipeline, cat_attribs)
])

# Create a model pipeline with preprocessing and Linear Regression
model_pipeline = make_pipeline(preprocessing, LinearRegression())

# Train the model
model_pipeline.fit(train_set.drop("charges", axis=1), train_set["charges"])
print("Model trained successfully!")`}
                downloadLink="https://github.com/naumgh/projectsAndSchool/blob/main/seng474-Data-Mining/assign1/medical_costs_post.ipynb"
                codeType="python"
            />

            <ProjectCard
    id="linear-regression-scratch"
    title="gpa_year_experience"
    description="Implemented a linear regression algorithm from scratch to predict salary based on GPA and years of experience. Compared results with scikit-learn's SGDRegressor and explored polynomial features."
    highlights={[
        "Read and preprocessed data from a CSV file (gpa_year_experience.csv).",
        "Scaled attributes for better convergence during training.",
        "Computed and visualized the error at each iteration.",
        "Predicted new instances and compared results with scikit-learn's SGDRegressor.",
        "Explored polynomial features to improve predictions.",
        "Full notebook available for download!"
    ]}
    codeSnippet={`# Linear Regression Implementation Example

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# Load the dataset
data = pd.read_csv('gpa_year_experience.csv')

# Feature scaling
data['gpa'] = (data['gpa'] - data['gpa'].mean()) / data['gpa'].std()
data['years_experience'] = (data['years_experience'] - data['years_experience'].mean()) / data['years_experience'].std()

# Initialize weights and bias
weights = np.random.randn(2)
bias = 0
learning_rate = 0.01

# Gradient Descent
for epoch in range(1000):
    predictions = np.dot(data[['gpa', 'years_experience']], weights) + bias
    errors = predictions - data['salary']
    weights -= learning_rate * np.dot(errors, data[['gpa', 'years_experience']]) / len(data)
    bias -= learning_rate * errors.mean()

print("Trained weights:", weights)
print("Trained bias:", bias)
`}
    downloadLink="https://github.com/naumgh/projectsAndSchool/blob/main/seng474-Data-Mining/assign1/gpa_years_experience_post.pdf"
    codeType="python"
/>
<ProjectCard
    id="penguins-classification"
    title="Penguin Species Classification"
    description="Analyzed the Palmer Penguins dataset to classify penguin species based on physical attributes such as culmen length, culmen depth, flipper length, and body mass. Demonstrated data cleaning, exploration, and visualization techniques."
    highlights={[
        "Explored the Palmer Penguins dataset with 344 samples across three species.",
        "Performed data cleaning and preprocessing to handle missing values.",
        "Visualized relationships between features using scatter plots and histograms.",
        "Built classification models to predict penguin species based on physical attributes.",
        "Compared model performance using metrics like accuracy and confusion matrices.",
        "Full notebook available for download!"
    ]}
    codeSnippet={`# Example: Visualizing the Palmer Penguins Dataset

import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

# Load the dataset
penguins = pd.read_csv('penguins.csv')

# Pairplot to visualize relationships between features
sns.pairplot(penguins, hue='species', diag_kind='kde')
plt.show()

# Correlation heatmap
plt.figure(figsize=(10, 6))
sns.heatmap(penguins.corr(), annot=True, cmap='coolwarm')
plt.title('Feature Correlation Heatmap')
plt.show()
`}
    downloadLink="https://github.com/naumgh/projectsAndSchool/blob/main/seng474-Data-Mining/assign1/penguins_post.ipynb"
    codeType="python"
/>
<ProjectCard
    id="sea-level-predictor"
    title="Sea Level Predictor"
    description="Analyzed historical sea level data to predict future trends using linear regression. Visualized the data and predictions with Matplotlib."
    highlights={[
        "Loaded and visualized historical sea level data from 1880 to 2013.",
        "Implemented linear regression to predict sea levels up to 2050.",
        "Created two lines of best fit: one for all data and one for data since 2000.",
        "Visualized predictions with scatter plots and regression lines.",
    ]}
    codeSnippet={`# Example: Linear Regression for Sea Level Prediction

import pandas as pd
import matplotlib.pyplot as plt
from scipy.stats import linregress

def draw_plot():
    # Read data from file
    df = pd.read_csv("epa-sea-level.csv")
    print(df.head())
    fig, ax = plt.subplots(figsize=(12,6))
    ax.scatter(df["Year"], df["CSIRO Adjusted Sea Level"], label = "Original Data", alpha=0.5)


    # Create first line of best fit and scatter plot
    slope, intercept, r_value, p_value, std_err = linregress(df["Year"],df["CSIRO Adjusted Sea Level"])
    x_vals = pd.Series(range(df['Year'].min(), 2051))
    y_vals = slope *x_vals + intercept

    ax.plot(x_vals, y_vals, 'r', label = f'Best Fit (1880-2050): y = {slope:.4f}x + {intercept:.2f}')
    # Create second line of best fit

    df_recent = df[df['Year'] >= 2000]

    slope_recent, intercept_recent, r_value_recent, p_value_recent, std_err_recent = linregress(df_recent["Year"],df_recent["CSIRO Adjusted Sea Level"])
    x_future = pd.Series(range(2000, 2051))
    y_future = slope_recent * x_future + intercept_recent

    ax.plot(x_future,y_future,'g', label = f'Best Fit (2000-2051): y = {slope_recent:.4f}x + {intercept_recent:.2f}')

    # Add labels and title

    plt.xlabel("Year")
    plt.ylabel("Sea Level (inches)")
    plt.title("Rise in Sea Level")
    
    # Save plot and return data for testing (DO NOT MODIFY)
    plt.savefig('sea_level_plot.png')
    return plt.gca()
`}
    downloadLink="https://github.com/naumgh/projectsAndSchool/blob/main/MISC/FreeCodeCampPython/Sea_Level_Predictor.py"
    codeType="python"
    visualization ={["/sea_level_plot.png"]}
        
/>

<ProjectCard
    id="time-series-visualizer"
    title="Time Series Visualizer"
    description="Visualized time series data of freeCodeCamp forum page views using line plots, bar plots, and box plots."
    highlights={[
        "Cleaned and filtered data to remove outliers.",
        "Created a line plot to show daily page views over time.",
        "Generated a bar plot to display monthly averages grouped by year.",
        "Designed box plots to visualize yearly and monthly distributions.",
    ]}
    codeSnippet={`import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns
import numpy as np
from pandas.plotting import register_matplotlib_converters
register_matplotlib_converters()

if not hasattr(np, 'float'):
    np.float = float

# Import data (Make sure to parse dates. Consider setting index column to 'date'.)
df = pd.read_csv("fcc-forum-pageviews.csv", parse_dates=["date"], index_col='date')

# Clean data
total_views = df['value'].sum()
df = df[
    (df['value'] < df['value'].quantile(0.975)) &
    (df['value'] > df['value'].quantile(0.025))
]

def draw_line_plot():
    # Draw line plot
    fig = df.plot(figsize=(12, 6), kind='line', title='Daily freeCodeCamp Forum Page Views 5/2016-12/2019', ylabel='Page Views', xlabel='Date').get_figure()
    fig.savefig('line_plot.png')
    return fig

def draw_bar_plot():
    # Copy and modify data for monthly bar plot
    df['year'] = df.index.year
    df['month'] = df.index.month

    # Group by year and month, and calculate the mean daily page views for each month
    monthly_avg = df.groupby(['year', 'month'])['value'].mean().unstack()

    # Plot the bar plot (each month as a separate series)
    ax = monthly_avg.plot.bar(figsize=(12, 6), title='Average Daily Page Views per Month by Year', xlabel='Years', ylabel='Average Page Views')

    # Add legend title and month names directly
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    ax.legend(title='Months', labels=months)

    # Get the figure from the axes object and save the plot
    fig = ax.get_figure()
    fig.savefig('bar_plot.png')
    return fig

def draw_box_plot():
    # Prepare data for box plots
    df_box = df.copy()
    df_box.reset_index(inplace=True)
    df_box['year'] = [d.year for d in df_box.date]
    df_box['month'] = [d.strftime('%b') for d in df_box.date]

    # Draw box plots
    month_order = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    fig, axes = plt.subplots(1, 2, figsize=(15, 6))
    sns.boxplot(x='year', y='value', data=df_box, ax=axes[0])
    axes[0].set_title('Year-wise Box Plot (Trend)')
    axes[0].set_xlabel('Year')
    axes[0].set_ylabel('Page Views')

    sns.boxplot(x='month', y='value', data=df_box, order=month_order, ax=axes[1])
    axes[1].set_title('Month-wise Box Plot (Seasonality)')
    axes[1].set_xlabel('Month')
    axes[1].set_ylabel('Page Views')

    fig.savefig('box_plot.png')
    return fig
`}
    downloadLink="https://github.com/naumgh/projectsAndSchool/blob/main/MISC/FreeCodeCampPython/time_series_visualizer.py"
    codeType="python"
    visualization={["/line_plot_timeseries.png", "/bar_plot_timeseries.png", "/box_plot_timeseries.png"]}
/>

<ProjectCard
    id="medical-data-visualizer"
    title="Medical Data Visualizer"
    description="Analyzed and visualized medical data to explore relationships between health metrics and cardiovascular disease using categorical plots and heatmaps."
    highlights={[
        "Calculated BMI to classify individuals as overweight.",
        "Created categorical plots to compare health metrics by cardiovascular disease status.",
        "Generated a heatmap to visualize correlations between health metrics.",
        "Cleaned data by removing outliers and invalid entries.",
        "Full script available for download!"
    ]}
    codeSnippet={`
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np

df = pd.read_csv("medical_examination.csv")
print(df.head())

df['overweight']=(df['weight'] / (df['height'] / 100) ** 2 > 25).astype(int)
df['cholesterol'] = (df['cholesterol'] > 1).astype(int)
df['gluc'] = (df['gluc'] > 1).astype(int)
print(df.head())

def draw_cat_plot():
    # Create DataFrame for cat plot using \`pd.melt\` with specified variables
    df_cat = pd.melt(df, id_vars=['cardio'],
                     value_vars=['cholesterol', 'gluc', 'smoke', 'alco', 'active', 'overweight'])

    # Group and reformat the data to split it by 'cardio'
    df_cat = df_cat.groupby(['cardio', 'variable', 'value']).size().reset_index(name='total')
    # Draw the catplot
    fig = sns.catplot(x='variable', y='total', hue='value', col='cardio',
                      data=df_cat, kind='bar').fig
    # Do not modify
    fig.savefig('catplot.png')
    return fig


def draw_heat_map():
    df_heat = df[
        (df['ap_lo'] <= df['ap_hi'])&
        (df['height'] >= df['height'].quantile(0.025))&
        (df['height'] <= df['height'].quantile(0.975))&
        (df['weight'] >= df['weight'].quantile(0.025))&
        (df['weight'] <= df['weight'].quantile(0.975))
    ]

    corr = df_heat.corr()
    mask = np.triu(np.ones_like(corr, dtype=bool))
    fig, ax = plt.subplots(figsize=(12, 12))
    sns.heatmap(corr, mask=mask, annot=True, fmt=".1f", ax=ax)
    fig.savefig('heatmap.png')
    return fig`}
    downloadLink="https://github.com/naumgh/projectsAndSchool/blob/main/MISC/FreeCodeCampPython/Medical_Data_Visualizer.py"
    codeType="python"
    visualization={["/catplot_medical.png", "/heatmap_medical.png"]}
/>

<ProjectCard
    id="mean-variance-calculator"
    title="Mean-Variance-Standard Deviation Calculator"
    description="Performed statistical analysis on demographic data to calculate key metrics such as mean, variance, and standard deviation."
    highlights={[
        "Calculated race representation and average age of men.",
        "Determined percentages of individuals with advanced education earning >50K.",
        "Analyzed work hours and income distribution by country.",
        "Identified the most popular occupation for high earners in India.",
    ]}
    codeSnippet={`# Example: Calculating Demographic Statistics

import pandas as pd

# Load data
df = pd.read_csv("adult.data.csv")

# Calculate statistics
race_count = df['race'].value_counts()
average_age_men = round(df[df['sex'] == 'Male']['age'].mean(), 1)
percentage_bachelors = round((df['education'].value_counts()['Bachelors'] / len(df)) * 100, 1)

print("Race Count:", race_count)
print("Average Age of Men:", average_age_men)
print("Percentage with Bachelors:", percentage_bachelors)
`}
    downloadLink=""
    codeType="python"
/>
            <ProjectCard
                id="search-algorithms"
                title="Search Algorithms Implementation"
                description="Implemented Uniform-Cost Search (UCS), A* Search, and Heuristic-based Pathfinding in Python to solve AI search problems."
                highlights={[
                    "Designed and implemented Uniform-Cost Search (UCS) for optimal pathfinding.",
                    "Developed an A* Search algorithm with heuristic evaluation.",
                    "Utilized priority queues for efficient frontier management.",
                    "Implemented graph traversal with state expansion and cost tracking.",
                    "Applied search algorithms to AI-related pathfinding problems.",
                    "Full file(s) available for download on Github!"
                ]}
                codeSnippet={`# A* Search Algorithm Implementation

import heapq

def a_star_search(start, goal, graph, heuristic):
    frontier = []
    heapq.heappush(frontier, (0, start))  # (priority, node)
    came_from = {start: None}
    cost_so_far = {start: 0}

    while frontier:
        _, current = heapq.heappop(frontier)

        if current == goal:
            break

        for neighbor, cost in graph[current]:
            new_cost = cost_so_far[current] + cost
            if neighbor not in cost_so_far or new_cost < cost_so_far[neighbor]:
                cost_so_far[neighbor] = new_cost
                priority = new_cost + heuristic(neighbor, goal)
                heapq.heappush(frontier, (priority, neighbor))
                came_from[neighbor] = current

    return came_from, cost_so_far

# Example Heuristic Function (Manhattan Distance)
def heuristic(node, goal):
    return abs(node[0] - goal[0]) + abs(node[1] - goal[1])

# Example Graph Representation
graph = {
    'A': [('B', 1), ('C', 4)],
    'B': [('A', 1), ('D', 2), ('E', 5)],
    'C': [('A', 4), ('F', 3)],
    'D': [('B', 2)],
    'E': [('B', 5), ('F', 1)],
    'F': [('C', 3), ('E', 1)]
}

came_from, cost_so_far = a_star_search('A', 'F', graph, heuristic)
print("Path cost:", cost_so_far['F'])
`}
                downloadLink="https://github.com/naumgh/projectsAndSchool/blob/main/MISC/a1_q456.py"
                codeType="python"
            />
   
    <!--       
    <ProjectHeader
    title="C++ Projects"
    iconSrc="https://www.vectorlogo.zone/logos/isocpp/isocpp-icon.svg"
    iconAlt="C++ Logo"
    titleColor="#306998"
    />  
    -->

    <ProjectCard
    id="smart-client"
    title="SmartClient: HTTP/HTTPS Connection Checker"
    description="A Python-based client to analyze HTTP/HTTPS connections, check for HTTP/2 support, and extract cookies from server responses."
    highlights={[
        "Implements connection handling for both HTTP (port 80) and HTTPS (port 443).",
        "Detects HTTP/2 support using ALPN (Application-Layer Protocol Negotiation).",
        "Parses and extracts cookies from server responses.",
        "Handles SSL/TLS wrapping for secure connections.",
        "Includes retry mechanisms and error handling for robust connectivity.",
        "Full file available for download on Github!"
    ]}
    codeSnippet={`# Snippet: Detecting HTTP/2 Support with ALPN
def upgradeToHttp2(self):
    context = ssl.create_default_context()
    context.set_alpn_protocols(['h2', 'spdy/3', 'http/1.1']) 
    self.s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    self.s = context.wrap_socket(self.s, server_hostname=self.domain)
    self.s.connect((self.domain, 443))
    if self.s.selected_alpn_protocol() == "h2":
        return True
    else:
        return False
`}
    downloadLink="https://github.com/naumgh/projectsAndSchool/tree/main/csc361-Networks/SmartClient"
    codeType="python"
/>
     
    <ProjectHeader
    title="LeetCode Problems"
    iconSrc="https://raw.githubusercontent.com/edent/SuperTinyIcons/master/images/svg/leetcode.svg"
    iconAlt="LeetCode Logo"
    titleColor="#FFA116"
    />  

    <ProjectCard
    id="leetcode-1"
    title="Leetcode #1. Two Sum"
    description="Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice."
    highlights={[
        "Example 1: Input: nums = [2,7,11,15], target = 9, Output: [0,1]",
        "Example 2: Input: nums = [3,2,4], target = 6, Output: [1,2]",
        "Example 3: Input: nums = [3,3], target = 6, Output: [0,1]",
        "Constraints: 2 <= nums.length <= 10^4, -10^9 <= nums[i], target <= 10^9.",
        "Full problem description available on <a href='https://leetcode.com/problems/two-sum/' target='_blank' class='text-blue-500 hover:underline'>LeetCode</a>!"
    ]}
    codeSnippet={`# Solution in Python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Create a hash map to store the indices of the numbers
        new_hash = {}
        for x in range(len(nums)):
            value = target - nums[x]
            # Check if the complement exists in the hash map
            if value in new_hash:
                return [new_hash[value], x]
            # Store the current number and its index in the hash map
            new_hash[nums[x]] = x
        return None
`}
    downloadLink=""
    codeType="python"
/>

    <ProjectCard
    id="leetcode-14"
    title="Leetcode #14. Longest Common Prefix"
    description="Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string."
    highlights={[
        "Example 1: Input: strs = [\"flower\",\"flow\",\"flight\"], Output: \"fl\"",
        "Example 2: Input: strs = [\"dog\",\"racecar\",\"car\"], Output: \"\" (No common prefix).",
        "Constraints: 1 <= strs.length <= 200, 0 <= strs[i].length <= 200.",
        "Full problem description available on <a href='https://leetcode.com/problems/longest-common-prefix/' target='_blank' class='text-blue-500 hover:underline'>LeetCode</a>!"
    ]}
    codeSnippet={`# Solution in Python
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        # Find the shortest string length
        min_length = float('inf')
        i = 0
        for x in strs:
            if len(x) < min_length:
                min_length = len(x)
        # Compare characters across strings
        while i < min_length:
            for s in strs:
                if s[i] != strs[0][i]:
                    return s[:i]
            i += 1
        return strs[0][:i]
`}
    downloadLink=""
    codeType="python"
/>

<ProjectCard
    id="leetcode-35"
    title="Leetcode #35. Search Insert Position"
    description="Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order. You must write an algorithm with O(log n) runtime complexity."
    highlights={[
        "Example 1: Input: nums = [1,3,5,6], target = 5, Output: 2",
        "Example 2: Input: nums = [1,3,5,6], target = 2, Output: 1",
        "Example 3: Input: nums = [1,3,5,6], target = 7, Output: 4",
        "Constraints: 1 <= nums.length <= 10^4, -10^4 <= nums[i] <= 10^4.",
        "nums contains distinct values sorted in ascending order.",
        "Full problem description available on <a href='https://leetcode.com/problems/search-insert-position/' target='_blank' class='text-blue-500 hover:underline'>LeetCode</a>!"
    ]}
    codeSnippet={`# Solution in Python
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        low = 0
        high = len(nums) - 1
        while low <= high:
            mid = low + (high - low) // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                low = mid + 1
            else:
                high = mid - 1
        if target < nums[mid]:
            return mid
        else:
            return mid + 1
`}
    downloadLink=""
    codeType="python"
/>

<ProjectCard
    id="leetcode-167"
    title="Leetcode #167. Two Sum II - Input Array Is Sorted"
    description="Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Return their indices as an integer array [index1, index2]."
    highlights={[
        "Example 1: Input: numbers = [2,7,11,15], target = 9, Output: [1,2]",
        "Example 2: Input: numbers = [2,3,4], target = 6, Output: [1,3]",
        "Example 3: Input: numbers = [-1,0], target = -1, Output: [1,2]",
        "Constraints: 2 <= numbers.length <= 3 * 10^4, -1000 <= numbers[i] <= 1000.",
        "numbers is sorted in non-decreasing order.",
        "Your solution must use only constant extra space.",
        "Full problem description available on <a href='https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/' target='_blank' class='text-blue-500 hover:underline'>LeetCode</a>!"
    ]}
    codeSnippet={`# Solution in Python
class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        ptr1 = 0
        ptr2 = len(numbers) - 1
        while ptr1 < ptr2:
            if target < numbers[ptr2] + numbers[ptr1]:
                ptr2 -= 1
            if numbers[ptr2] + numbers[ptr1] < target:
                ptr1 += 1
            if numbers[ptr2] + numbers[ptr1] == target:
                if ptr1 <= ptr2:
                    return [ptr1+1, ptr2+1]
                else:
                    return [ptr2+1, ptr1+1]
        return []
`}
    downloadLink=""
    codeType="python"
/>


<ProjectCard
    id="leetcode-1004"
    title="Leetcode #1004. Max Consecutive Ones III"
    description="Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's."
    highlights={[
        "Example 1: Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2, Output: 6",
        "Example 2: Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3, Output: 10",
        "Constraints: 1 <= nums.length <= 10^5, nums[i] is either 0 or 1, 0 <= k <= nums.length.",
        "Full problem description available on <a href='https://leetcode.com/problems/max-consecutive-ones-iii/' target='_blank' class='text-blue-500 hover:underline'>LeetCode</a>!"
    ]}
    codeSnippet={`# Solution in Python
class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        max_window = 0
        num_zeros = 0
        l = 0
        
        for r in range(len(nums)):
            if nums[r] == 0:
                num_zeros += 1
            
            while num_zeros > k:
                if nums[l] == 0:
                    num_zeros -= 1
                l += 1
            
            temp_window = r - l + 1
            if temp_window > max_window:
                max_window = temp_window
        
        return max_window
`}
    downloadLink=""
    codeType="python"
/>

    <ProjectHeader
    title="MISC Projects"
    iconSrc="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
    iconAlt="Git logo"
    titleColor="#FF0000"
    />
<ProjectCard
    id="bitmap-display"
    title="Bitmap Display Renderer"
    description="A MIPS assembly function to render a 16x16 byte array as a black-and-white bitmap on a display simulator. Part of a larger Game of Life implementation."
    highlights={[
        "Implemented pixel rendering for a 16x16 grid using MIPS assembly.",
        "Utilized nested loops for row-major traversal of a byte array.",
        "Converted binary values (0/1) to pixel colors (black/white).",
        "Managed stack and registers for function calls in a low-level environment.",
        "Full file available for download on Github!"
    ]}
    codeSnippet={`# draw_16x16:
# $a0: start address of 16x16 byte array
# Renders array to bitmap display (0 = black, 1 = white)
draw_16x16:
    addi $sp, $sp, -16
    sw $ra, 0($sp)
    sw $s0, 4($sp)
    sw $s1, 8($sp)
    sw $s2, 12($sp)
    
    add $s0, $zero, $a0    # Source array
    add $s1, $zero, $zero  # Row counter
draw_row:
    add $s2, $zero, $zero  # Column counter
draw_col:
    add $a0, $zero, $s0
    add $a1, $zero, $s1
    add $a2, $zero, $s2
    jal get_16x16          # Get byte value (0 or 1)
    
    add $a0, $zero, $s1    # Row
    add $a1, $zero, $s2    # Col
    sub $a2, $zero, $v0    # 0 -> 0x00000000, 1 -> 0xffffffff
    jal set_pixel          # Draw pixel
    
    addi $s2, $s2, 1
    blt $s2, 16, draw_col
    addi $s1, $s1, 1
    blt $s1, 16, draw_row
    
    lw $ra, 0($sp)
    lw $s0, 4($sp)
    lw $s1, 8($sp)
    lw $s2, 12($sp)
    addi $sp, $sp, 16
    jr $ra`}
    downloadLink="https://github.com/naumgh/projectsAndSchool/blob/main/csc230-Computer-Architecture/assignments/a4/display.asm"
    codeType="nasm"
/>
</div>
     <Footer />
    </div>
</main>