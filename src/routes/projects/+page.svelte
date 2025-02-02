<script lang="ts">
    //@ts-ignore
    import Navbar from "../../lib/components/Navbar.svelte";
    import Footer from "../../lib/components/Footer.svelte";
    import { Octokit } from "octokit";
    import { onMount } from 'svelte';
    import ProjectCard from '../../lib/components/ProjectCard.svelte';
    import ProjectHeader from '../../lib/components/ProjectHeader.svelte';
</script>

<Navbar />

<main class="p-4 sm:p-6 bg-background text-primary font-sans min-h-screen text-center">
    <!-- Page Container with Max Width -->
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
        
        <!-- SQL Projects -->
        <ProjectHeader
            title="SQL Projects"
            iconSrc="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"
            iconAlt="PostgreSQL Logo"
            titleColor="#336791"
        />

        <!-- Project Cards -->
        <div class="space-y-4 sm:space-y-6">
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
            <ProjectHeader
                title="Python Projects"
                iconSrc="https://www.vectorlogo.zone/logos/python/python-icon.svg"
                iconAlt="Python Logo"
                titleColor="#306998"
            />

            <ProjectCard
                title="Database Management System"
                description="A Python-based interactive application for managing campaign, volunteer, donation, and event data, backed by PostgreSQL."
                highlights={[
                    "Utilized Psycopg2 for robust PostgreSQL database connections.",
                    "Designed modular, class-based architecture.",
                    "Implemented dynamic CRUD operations.",
                    "Created ASCII-based visualizations.",
                    "Full file(s) available for download!"
                ]}
                codeSnippet={`# Sample Code: Insert Donations with ON CONFLICT Handling
def insertIntoDonatesTable(self):
    try:
        cursors['cursor6'].executemany(campsql, campaign_data)
        dbconn.commit()
        print("Inserted successfully")
    except psycopg2.Error as e:
        dbconn.rollback()
        print("Error inserting:", e)`}
                downloadLink="/gng.py"
                codeType="python"
            />

            <ProjectCard
                title="Medical Insurance Cost Prediction"
                description="A machine learning pipeline to predict insurance costs based on patient demographics using Scikit-Learn, Pandas, and NumPy."
                highlights={[
                    "Implemented a full Scikit-Learn preprocessing pipeline.",
                    "Utilized DecisionTreeRegressor and RandomForestRegressor.",
                    "Performed hyperparameter tuning with RandomizedSearchCV.",
                    "Full file(s) available for download!"
                ]}
                codeSnippet={`# Model Training
model_pipeline.fit(train_set.drop("charges", axis=1), train_set["charges"])
print("Model trained successfully!")`}
                downloadLink="/medical_costs_post.ipynb"
                codeType="python"
            />
        </div>

        <Footer />
    </div>
</main>
