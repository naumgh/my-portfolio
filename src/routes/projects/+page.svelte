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
                <p>SQL Projects/</p>
                <p class="pl-4">│── <a href="#sql-schema" class="text-blue-500 hover:underline">Database Schema Design</a></p>
                
                <p>Python Projects/</p>
                <p class="pl-4">│── <a href="#db-management" class="text-blue-500 hover:underline">Database Management System</a></p>
                <p class="pl-4">│── <a href="#ml-project" class="text-blue-500 hover:underline">Medical Insurance Cost Prediction</a></p>
                <p class="pl-4">│── <a href="#search-algorithms" class="text-blue-500 hover:underline">Search Algorithms Implementation</a></p>
                
                <p>LeetCode Projects/</p>
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
                id="search-algorithms"
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
   
    <!--       
    <ProjectHeader
    title="C++ Projects"
    iconSrc="https://www.vectorlogo.zone/logos/isocpp/isocpp-icon.svg"
    iconAlt="C++ Logo"
    titleColor="#306998"
    />  
    -->        
     
    <ProjectHeader
    title="LeetCode Projects"
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
        "Full file available for download!"
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
    downloadLink="/render.asm"
    codeType="nasm"
/>
</div>
     <Footer />
    </div>
</main>