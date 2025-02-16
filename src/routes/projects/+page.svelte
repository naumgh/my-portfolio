<script lang="ts">
    //@ts-ignore
    import Navbar from "../../lib/components/Navbar.svelte";
    import Footer from "../../lib/components/Footer.svelte";
    import { Octokit } from "octokit";
    import { onMount } from 'svelte';
    import ProjectCard from '../../lib/components/ProjectCard.svelte';
    import ProjectHeader from '../../lib/components/ProjectHeader.svelte';

    //we scrapped the github repo stuff
    
</script>
    
    <Navbar />
    
    <main class="p-6 bg-background text-primary font-sans min-h-screen">
    <!-- Page Container with Max Width -->
    <nav class="mb-6 p-4 rounded-md shadow-md">
        <h2 class="text-lg font-semibold mb-2">Table of Contents</h2>
<pre class="pl-2 text-accent">
    
    SQL Projects/
    │── <a href="#sql-schema" class="text-blue-500 hover:underline">Database Schema Design</a>
    │
    Python Projects/
    │── <a href="#db-management" class="text-blue-500 hover:underline">Database Management System</a>
    │── <a href="#ml-project" class="text-blue-500 hover:underline">Medical Insurance Cost Prediction</a>
    │── <a href="#search-algorithms" class="text-blue-500 hover:underline">Search Algorithms Implementation</a>
        </pre>
    </nav>

    <div class="max-w-10xl mx-auto px-6">
        <!-- Python ML/AI Projects -->
        
        <ProjectHeader
            title="SQL Projects"
            iconSrc="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"
            iconAlt="PostgreSQL Logo"
            titleColor="#336791"
        />
      
        <!-- Project Cards -->
        <div class="space-y-6">
            <ProjectCard
                title="Database Schema Design Showcase"
                description="Designed a relational database schema to manage campaigns, donations, volunteers, and expenses. Ensured data integrity using primary and foreign keys, while optimizing queries for efficient data retrieval."
                highlights={[
                  "Designed and normalized a relational database schema (3NF).",
                  "Implemented many-to-many relationships with junction tables.",
                  "Enforced referential integrity with foreign keys.",
                  "Created complex queries for data aggregation and retrieval.",
                  "Full file(s) avaliable for download!"
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
                downloadLink="/gng-construct.sql"
                codeType="sql"
            />
            <ProjectHeader
            title="Python Projects"
            iconSrc="https://www.vectorlogo.zone/logos/python/python-icon.svg"
            iconAlt="Python Logo"
            titleColor="#306998"
            />
            <ProjectCard
                title="Database Management System"
                description="A Python-based interactive application for managing campaign, volunteer, donation, and event data, backed by PostgreSQL. Includes modular design, advanced SQL queries, and intuitive data visualization."
                highlights={[
                    "Utilized Psycopg2 for robust PostgreSQL database connections and query execution.",
        "Designed modular, class-based architecture for maintainability and scalability.",
        "Implemented dynamic CRUD operations for campaigns, volunteers, and events.",
        "Created ASCII-based visualizations for financial insights (inflows, outflows, budgets).",
        "Handled complex SQL queries with Common Table Expressions (CTEs) for data aggregation.",
        "Incorporated input validation and transaction rollbacks for error handling and data integrity.",
        "Full file(s) avaliable for download!"]}
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
                downloadLink="/gng.py"
                codeType="python"
            />


<ProjectCard
    title="Medical Insurance Cost Prediction"
    description="A machine learning pipeline to predict insurance costs based on patient demographics using Scikit-Learn, Pandas, and NumPy. Includes feature engineering, model training, and cross-validation."
    highlights={[
        "Implemented a full Scikit-Learn preprocessing pipeline with StandardScaler and OneHotEncoder.",
        "Utilized DecisionTreeRegressor and RandomForestRegressor for cost prediction.",
        "Performed hyperparameter tuning with RandomizedSearchCV for model optimization.",
        "Applied log transformation to normalize skewed distributions.",
        "Engineered features based on regional, lifestyle, and demographic factors.",
        "Integrated cross-validation to improve model generalization.",
        "Full file(s) available for download!"
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
    downloadLink="/medical_costs_post.ipynb"
    codeType="python"
/>

<ProjectCard
title="Search Algorithms Implementation"
description="Implemented Uniform-Cost Search (UCS), A* Search, and Heuristic-based Pathfinding in Python to solve AI search problems."
highlights={[
    "Designed and implemented Uniform-Cost Search (UCS) for optimal pathfinding.",
    "Developed an A* Search algorithm with heuristic evaluation.",
    "Utilized priority queues for efficient frontier management.",
    "Implemented graph traversal with state expansion and cost tracking.",
    "Applied search algorithms to AI-related pathfinding problems.",
    "Full file(s) available for download!"
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
downloadLink="/a1_q456.py"
codeType="python"
/>

        </div>
        <Footer />
    </div>
</main>

