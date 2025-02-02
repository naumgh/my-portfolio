<script lang="ts">
    //@ts-ignore
    import Navbar from "../../lib/components/Navbar.svelte";
    import Footer from "../../lib/components/Footer.svelte";
    import ProjectCard from '../../lib/components/ProjectCard.svelte';
    import ProjectHeader from '../../lib/components/ProjectHeader.svelte';
</script>

<Navbar />

<main style="padding: 16px; background-color: var(--background); color: var(--primary); font-family: sans-serif; min-height: 100vh;">
    <!-- Page Container with Max Width -->
    <div style="max-width: 1200px; margin: 0 auto; padding: 0 16px;">
        
        <!-- SQL Projects -->
        <div style="font-size: 32px; font-weight: bold; margin-bottom: 24px;">
            <ProjectHeader
                title="SQL Projects"
                iconSrc="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"
                iconAlt="PostgreSQL Logo"
                titleColor="#336791"
            />
        </div>

        <!-- Project Cards -->
        <div style="display: flex; flex-direction: column; gap: 16px;">
            <ProjectCard
                title="Database Schema Design Showcase"
                description="Designed a relational database schema to manage campaigns, donations, volunteers, and expenses. Ensured data integrity using primary and foreign keys, while optimizing queries for efficient data retrieval."
                highlights={[
                  "Designed and normalized a relational database schema (3NF).",
                  "Implemented many-to-many relationships with junction tables.",
                  "Enforced referential integrity with foreign keys.",
                  "Created complex queries for data aggregation and retrieval.",
                  "Full file(s) available for download!"
                ]}
                codeSnippet={`--Some table Definition Examples
CREATE TABLE CAMPAIGN(
  CID bigint PRIMARY KEY,
  Name varchar(33) NOT NULL,
  campaignBudget real,
  mission text,
  startDate DATE,
  endDate DATE
);`}
                downloadLink="/gng-construct.sql"
                codeType="sql"
            />

            <!-- Python Projects -->
            <div style="font-size: 32px; font-weight: bold; margin-bottom: 24px;">
                <ProjectHeader
                    title="Python Projects"
                    iconSrc="https://www.vectorlogo.zone/logos/python/python-icon.svg"
                    iconAlt="Python Logo"
                    titleColor="#306998"
                />
            </div>

            <ProjectCard
                title="Database Management System"
                description="A Python-based interactive application for managing campaign, volunteer, donation, and event data, backed by PostgreSQL."
                highlights={[
                    "Utilized Psycopg2 for robust PostgreSQL database connections and query execution.",
                    "Designed modular, class-based architecture for maintainability and scalability.",
                    "Implemented dynamic CRUD operations for campaigns, volunteers, and events.",
                    "Created ASCII-based visualizations for financial insights (inflows, outflows, budgets).",
                    "Handled complex SQL queries with Common Table Expressions (CTEs) for data aggregation.",
                    "Incorporated input validation and transaction rollbacks for error handling and data integrity.",
                    "Full file(s) available for download!"
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
        </div>

        <Footer />
    </div>
</main>
