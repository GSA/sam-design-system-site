# Workspace Page

The workspace landing page (Tier 1 "My Workspace") is available to an authenticated user. The workspace is where a user goes to work with their "stuff." Subpages (Tier 2) are individualized, based on a user's organization, roles, and preferences.

- Workspace is divided into three groupings: Preferences, Administration, Data Entry
- 'Widgets' populate each section and appear based on user's organization, roles, and preferences and link to a Tier 2 page/workspace

## Global Elements

- [Page Header](/pages/global-elements#PageHeader)
- [Page Footer](/pages/global-elements#PageFooter)

## Widgets
On the workspace, widgets are relatively small blocks of content for each functional area associated with the authenticated user.
Widgets should be built to summarize recent activity and provide access to the most important and/or time-sensitive actions the user will perform. Widgets should be informational and simple but can be varied in size.

Suggested content includes:
- Clear and consistent title that identifies the domain/subpages the widget represents
- Settings icon (currently opens sub-menu for Help, future functionality such as hide, customize)
- Banner highlighting new updates/key counts (Optional)
- Key content area should contain the following as relevant to the functionality offered by the domain/subpages
  * Icon
  * Action buttons for top functions (e.g., 'Change Password' 'Create Listing')
  * Infographic or Numeric counts of actions that are part of a data entry workflow, such as approving, submitting, etc.
  * Links to most frequently accessed content, such as top searches or favorite Reports
- Link(s) to domain/subpages
- Notification counts may appear in the widget but notifications should be grouped in the Header element or Notifications feed page.

Examples of widget layouts:

**Example 1**
![Example 1](/assets/img/example1.png)

**Example 2**
![Example 2](/assets/img/example2.png)

**Example 3**
![Example 3](/assets/img/example3.png)

## Workspace Page layout
Currently, the layout of the workspace page is fixed. Widgets appear in each of the sections (Preferences, Administration, Data Entry) based on user preferences and roles.

_Example image of workspace layout blocking_
![Workspace Layout](/assets/img/workspace-layout.png)

### Preferences Section
#### Search
Authenticated users can access and execute a previously saved search from the Saved Searches workspace widget.

#### Reports
Authenticated users can access report functionality such as favorites and saved report criteria.

### Administration Section
There are multiple administrative workspaces
- Federal Hierarchy.  The federal hierarchy administers a directory of organizations in the federal awarding and funding hierarchy.
- Role Management.  Role administrators assign and remove user roles.
- Alerts.  This is an IAE Admin function for publishing and expiring broadcast alerts

### Data Entry Section
A user signs in to perform data entry because they have assignments or are responsible for specific objects (entities, awards, listings). “My Stuff” most frequently means objects I am accountable for, that I have to keep track of.  These should be known objects. The status of my objects is the most important driver indicating what a user is interested in.  Anything with a status that requires the user to take action is most important.

There are potentially many data entry workspaces.

- “Data entry” describes award data, not administrative data. Federal and entity users enter award data.
- “Data entry” includes actions that are part of a data entry workflow, such as approving, submitting, etc.