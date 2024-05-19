pragma solidity ^0.8.0;

contract Crowdfunding {
    mapping(address => uint256) public balances;
    mapping(address => bool) public campaignCreators;
    mapping(address => Campaign) public campaigns;

    struct Campaign {
        address creator;
        string name;
        uint256 goalAmount;
        uint256 totalRaised;
        uint256 deadline;
        bool closed;
    }

    event CampaignCreated(address indexed creator, string name, uint256 goalAmount, uint256 deadline);
    event Contribution(address indexed contributor, address indexed campaign, uint256 amount);
    event CampaignClosed(address indexed campaign, uint256 totalRaised);

    modifier onlyCreator(address _campaign) {
        require(campaigns[_campaign].creator == msg.sender, "Only campaign creators can perform this action");
        _;
    }

    constructor() {
        // Initialize contract
    }

    function createCampaign(string memory _name, uint256 _goalAmount, uint256 _deadline) external {
        require(_deadline > block.timestamp, "Deadline must be in the future");
        require(campaigns[msg.sender].creator == address(0), "Campaign already exists for this address");
        campaigns[msg.sender] = Campaign(msg.sender, _name, _goalAmount, 0, _deadline, false);
        campaignCreators[msg.sender] = true;
        emit CampaignCreated(msg.sender, _name, _goalAmount, _deadline);
    }

    function contribute(address _campaign) external payable {
        Campaign storage campaign = campaigns[_campaign];
        require(campaign.creator != address(0), "Campaign does not exist");
        require(!campaign.closed, "Campaign is closed");
        require(block.timestamp < campaign.deadline, "Campaign deadline has passed");
        require(msg.value > 0, "Contribution amount must be greater than zero");
        campaign.totalRaised += msg.value;
        balances[msg.sender] += msg.value;
        emit Contribution(msg.sender, _campaign, msg.value);
    }

    function closeCampaign(address _campaign) external onlyCreator(_campaign) {
        Campaign storage campaign = campaigns[_campaign];
        require(!campaign.closed, "Campaign is already closed");
        campaign.closed = true;
        emit CampaignClosed(_campaign, campaign.totalRaised);
    }

    function withdrawFunds() external {
        uint256 amount = balances[msg.sender];
        require(amount > 0, "No funds available for withdrawal");
        require(address(this).balance >= amount, "Contract balance is insufficient");
        balances[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }

    receive() external payable {
        // Fallback function
    }
}